import React from 'react';

import { Categories, SortPopup, DoorBlock } from '../components';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={['Шпонированные', 'Экошпон', 'ПВХ', 'Массив', 'Эмаль']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все двери</h2>
      <div className="content__items">
        {items.map((obj) => (
          <DoorBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
