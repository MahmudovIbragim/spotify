import { Link, useNavigate } from 'react-router-dom';
import {
  IconBell,
  IconBlackLogo,
  IconDownload,
  IconHome,
} from '../../../assets/icons';
import scss from './Header.module.scss';
import Input from '../../../ui/input/Input';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [isDrop, setIsDrop] = useState(false);

  return (
    <header className={scss.Header}>
      <div className={scss.Content}>
        <div
          className={scss.left_content}
          onClick={() => {
            navigate('/');
          }}
        >
          <IconBlackLogo />
        </div>
        <div></div>
        <div className={scss.center_content}>
          <button
            className={scss.icon}
            onClick={() => {
              navigate('/');
            }}
          >
            <IconHome />
          </button>
          <Input placeholder='Что хочешь включить ?' />
        </div>
        <div className={scss.right_content}>
          <button>Узнать больше о Premium</button>
          <Link to={'#'}>
            <span>
              <IconDownload />
            </span>
            <span>Установить приложение</span>
          </Link>
          <div className={scss.button_bell}>
            <button>
              <IconBell />
            </button>
          </div>
          <button className={scss.profile}>
            <figure>
              <div
                className={scss.border_profile}
                onClick={() => {
                  setIsDrop(!isDrop);
                }}
              ></div>
            </figure>
          </button>
          <div className={isDrop ? scss.drop_out : scss.none}>
            <ul>
              <li>
                <p>Счет</p>
              </li>
              <li>
                <p>Профиль</p>
              </li>
              <li>
                <p>Обновите до Премиум</p>
              </li>
              <li>
                <p>Настройки</p>
              </li>
              <hr />
              <li
                onClick={() => {
                  navigate('/login');
                  localStorage.removeItem('token');
                  localStorage.clear();
                  setIsDrop(false);
                }}
              >
                <button>Выйти</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
