import React from 'react';

import { Header, Categories, SortPopup } from './components'; // webpack при сборке сначала ищет файл index.js по указанному пути

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
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
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/kCu_bisv_ZPsMw3WaWQTCkBW-hesrzV6.jpeg"
                alt="Door"
              />
              <h4 className="door-block__title">Премьер 2</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 7000 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/umbW_zjw9h4czwfv-6BkXB0jdN8ZDOsQ.jpeg"
                alt="Door"
              />
              <h4 className="door-block__title">Стиль</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 5500 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/mMURG7h-jf_Rou1ovbJwfMNv2mvY05El.jpg"
                alt="Door"
              />
              <h4 className="door-block__title">Классик</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 8200 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/Items/ac09731fdef6ed0d8c77b127e6541c9966d21e6a.jpeg"
                alt="Door"
              />
              <h4 className="door-block__title">Венера</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 5000 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/9fvieEwIM-p2CBERq1mqe8p8Wj4hUwXQ.jpeg"
                alt="Door"
              />
              <h4 className="door-block__title">Венера макоре</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 5000 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/Items/4ef0640abb2bdcf4482aeeb88b46b56110b3cfb7.jpeg"
                alt="Door"
              />
              <h4 className="door-block__title">Муза</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 5100 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/Items/c16387b5856aead1b0f5da10e82ff4d5785054fd.jpeg"
                alt="Door"
              />
              <h4 className="door-block__title">Муза макоре</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 4400 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/nXempSd43Yiy_YaVLh6jub9jVTI2Rf01.jpeg"
                alt="Door"
              />
              <h4 className="door-block__title">Муза венге</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 5100 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/JEW0t1khJr14-YHLlVjDLCWDj-LT0dlT.jpg"
                alt="Door"
              />
              <h4 className="door-block__title">Лидия</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 2800 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/Items/da5f03b6c2a2cb2e02e7018aa9c7e4f5e3f897b5.jpeg"
                alt="Door"
              />
              <h4 className="door-block__title">Line</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 4500 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/Items/03d21d8c605b9394983a98e1aa75df84bdbe36df.jpeg"
                alt="Door"
              />
              <h4 className="door-block__title">Вудлайн</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 6000 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/Items/cbb062033e3d866da88241532dbea1128939b867.jpg"
                alt="Door"
              />
              <h4 className="door-block__title">Duplex Мателюкс</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 3000 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/dTeEAetNFNwwdb3d8jwvPPOWYqf62kJu.jpg"
                alt="Door"
              />
              <h4 className="door-block__title">Linea 1</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 4800 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/Items/30512b3538f8ca4c4c9eafee7ebb52a9590320d6.jpg"
                alt="Door"
              />
              <h4 className="door-block__title">Linea 2</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 4800 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/CXVgz0Qp32Nk7wgZ7cCoj4TtcfPJ4Dfs.jpg"
                alt="Door"
              />
              <h4 className="door-block__title">Imperia</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 3850 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/SbRJgiYoJcJOnC2Rodzu8sktVUPtw-uV.jpg"
                alt="Door"
              />
              <h4 className="door-block__title">Верона</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 9400 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/U3_8C8YfTBAXPEP093uHs1FbRog-Zau1.jpg"
                alt="Door"
              />
              <h4 className="door-block__title">Соло</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 7500 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/JkFhGgtX2kEI_nA9F6rYBnJs0pmoN5aQ.jpg"
                alt="Door"
              />
              <h4 className="door-block__title">Альба</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 9500 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/FElCC7QGMEjlq5edQ1Wv8L3KahsYnGAG.jpg"
                alt="Door"
              />
              <h4 className="door-block__title">Водопад</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 2300 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
            <div className="door-block">
              <img
                className="door-block__image"
                src="http://russiadoors.com/sitefiles/fx/245x550/ItemsVarsValues/XjVWfIi51oCZUltyVvA04hnWUaABxyK8.jpg"
                alt="Door"
              />
              <h4 className="door-block__title">Кристина</h4>
              <div className="door-block__selector">
                <ul>
                  <li className="active">глухая</li>
                  <li>остекленная</li>
                </ul>
                <ul>
                  <li className="active">700х2000</li>
                  <li>800х2000</li>
                  <li>900х2000</li>
                </ul>
              </div>
              <div className="door-block__bottom">
                <div className="door-block__price">от 1800 ₽</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
