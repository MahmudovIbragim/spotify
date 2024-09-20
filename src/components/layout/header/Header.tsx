import { Link, useNavigate } from 'react-router-dom';
import {
  IconBell,
  IconBlackLogo,
  IconDownload,
  IconHome,
} from '../../../assets/icons';
import scss from './Header.module.scss';
import Input from '../../../ui/input/Input';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={scss.Header}>
      <div className={scss.Content}>
        <div className={scss.left_content}>
          <IconBlackLogo />
        </div>
        <div></div>
        <div className={scss.center_content}>
          <button className={scss.icon}>
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
                  navigate('/login');
                  localStorage.removeItem('token');
                  localStorage.clear();
                }}
              >
                <img
                  src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
                  alt=''
                />
              </div>
            </figure>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
