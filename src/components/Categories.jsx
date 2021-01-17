import React from 'react';

// Class component:
/*
class Categories extends React.Component {
  state = {
    activeItem: null,
  };

  onSelectItem = (index) => {
    this.setState({
      // при помощи setState меняем конкретное свойство и производит ререндер
      activeItem: index,
    });
  };

  render() {
    const { items, onClickItem } = this.props;
    return (
      <div className="categories">
        <ul>
          <li
            className={this.state.activeItem === null ? 'active' : ''}
            onClick={() => this.onSelectItem(null)}>
            Все
          </li>
          {items.map((name, index) => (
            <li
              className={this.state.activeItem === index ? 'active' : ''}
              onClick={() => this.onSelectItem(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
*/

// Functional component:
function Categories({ items, onClickItem }) {
  /*
  useState возвращает значение с состоянием и функцию для его обновления.
  Во время первоначального рендеринга возвращаемое состояние (state) совпадает со значением, переданным в качестве первого аргумента (initialState).
  Функция setState используется для обновления состояния. Она принимает новое значение состояния и ставит в очередь повторный рендер компонента.
  */
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
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
  );
}

export default Categories;
