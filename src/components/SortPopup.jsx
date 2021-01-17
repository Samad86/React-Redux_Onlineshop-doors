import React, { useState, useEffect, useRef } from 'react';

function SortPopup({ items }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  /* Хук useRef позволяет получить ссылку над DOM элемент.
  const refContainer = useRef(initialValue)
  useRef возвращает изменяемый ref-объект, свойство current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента. */
  const sortRef = useRef(); // в переменной sortRef хранится объект {current: undefined}; в свойстве current хранится актуальная ссылка на наше значение

  /* Лучше передавать в onClick таким образом, а не просто анонимную функцию (() => setVisiblePopup(!visiblePopup)) из-за улучшения производительности. Если передавать в onClick просто анонимную функцию, то при каждом клике будет создаваться новая анонимная функция (лишний ререндер). При создании каждый раз новой анонимной функции выделяется новая ячейка памяти.
  Сейчас же переменная toggleVisiblePopup хранит ссылку на одну и ту же функцию. И при ререндере React будет понимать, что ссылка на функцию не изменилась, и лишний ререндер происходить не будет. */
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  /* Если будет произведен клик в любой области вне popup окна, popup окно будет скрываться.
  На весь документ вешается обработчик клика. После события клика проверяем, по какой части документа был произведен клик. Если вне popup окна, то скрываем popup окно (visiblePopup = false).*/

  /* handleOutsideClick - функция проверки клика. В аргументе event будет храниться событие клика (MouseEvent).
  При клике по любому элементу вызывается объект MouseEvent, у которого есть свойство path (путь к этому элементу).
  path является массивом. Например, при клике по кнопке корзины массив path = [span, button.button.button--cart, div.header__cart, div.container, div.header, div.wrapper, div#root, body, html, document, window].
  При клике по кнопке сортировки массив path = [span, div.sort__label, div.sort, div.content__top, div.container, div.content, div.wrapper, div#root, body, html, document, Window].
  При помощи метода includes() проверяем, есть ли в массиве path элемент "sort" (он есть - div.sort). */
  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath()); // для отображения в Firefox (в Firefox путь - composedPath)
    if (!path.includes(sortRef.current)) setVisiblePopup(false); // если был произведен клик вне области элемента "sort", то скрываем popup окно
  };

  /* useEffect следит за эффектом компонента, за тем, что с ним может быть (проверяет, был ли компонент обновлен, первый раз смонтирован, должен ли компонент удалиться и т.п.).
  Если произошел эффект (например, компонент первый раз отрендерился), то выполняется функция в ().
  И если зависимостей нет, т.е. массив пустой [], то useEffect будет следить только за первым рендером, и функция выполнится 1 раз.
  Если зависимости есть (например, в массиве хранится какая-то переменная [visiblePopup]), то это значит, что если эта переменная visiblePopup изменится, то будет вызываться useEffect и выполняться функция в ().
  Когда компонент удаляется из страницы, он будет удалять обработчик клика. */
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  /* onSelectItem контролирует отображение и скрытие popup окна */
  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  };

  const activeLabel = items[activeItem];

  return (
    // ref={sortRef} - короткая запись функции ref={(ref) => {sortRef.current = ref}} - в качестве параметра ref передаем в функцию "sort"
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((name, index) => (
                <li
                  className={activeItem === index ? 'active' : ''}
                  onClick={() => onSelectItem(index)}
                  key={`${name}_${index}`}>
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortPopup;
