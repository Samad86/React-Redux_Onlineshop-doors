import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components'; // webpack при сборке сначала ищет файл index.js по указанному пути
import { Home, Cart } from './pages';

function App() {
  const [doors, setDoors] = useState([]);

  // fetch-запрос на получение данных с фейкового сервера db.json.
  // Когда запрос был отправлен, переконвертирован в json и ответ от сервера пришел, мы этот json прокидываем в setDoors.
  // В итоге получаем объект и вытаскиваем из него свойство "doors".
  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then((json) => {
        setDoors(json.doors);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route exact path="/" render={() => <Home items={doors} />} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
