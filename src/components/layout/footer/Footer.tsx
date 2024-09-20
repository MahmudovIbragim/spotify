import { Link } from 'react-router-dom';
import scss from './Footer.module.scss';
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
} from '../../../assets/icons';

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.info_contents}>
            <ul>
              <li>
                <p>Предприятие</p>
              </li>
              <li>
                <Link to={'https://www.spotify.com/kg-ru/about-us/contact/'}>
                  На
                </Link>
              </li>
              <li>
                <Link to={'https://www.lifeatspotify.com/'}>Вакансии</Link>
              </li>
              <li>
                <Link to={''}>Для протокола</Link>
              </li>
            </ul>

            <ul>
              <li>
                <p>Сообщества</p>
              </li>
              <li>
                <Link to={''}>Для художников</Link>
              </li>
              <li>
                <Link to={''}>Разработчики</Link>
              </li>
              <li>
                <Link to={''}>Реклама</Link>
              </li>
              <li>
                <Link to={''}>Инвесторы</Link>
              </li>
              <li>
                <Link to={''}>Поставщики</Link>
              </li>
            </ul>

            <ul>
              <li>
                <p>Полезные ссылки</p>
              </li>
              <li>
                <Link to={''}>Поддерживать</Link>
              </li>
              <li>
                <Link to={'https://www.spotify.com/kg-ru/download/windows/'}>
                  Бесплатное мобильное приложение
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <p>Планы Spotify</p>
              </li>
              <li>
                <Link to={''}>Премиум Индивидуальный</Link>
              </li>
              <li>
                <Link to={''}>Премиум Дуэт</Link>
              </li>
              <li>
                <Link to={''}>Премиум семейный</Link>
              </li>
              <li>
                <Link to={''}>Университетская премия</Link>
              </li>
              <li>
                <Link to={''}>Спотифай бесплатно</Link>
              </li>
            </ul>
            <div className={scss.social}>
              <button>
                <IconInstagram />
              </button>
              <button>
                <IconTwitter />
              </button>
              <button>
                <IconFacebook />
              </button>
            </div>
          </div>
          <hr />
          <div className={scss.decs}>
            <div className={scss.foot_desc}>
              <p>Юридический</p>
              <p>Центр безопасности и конфиденциальности</p>
              <p>политика конфиденциальности</p>
              <p>Файлы cookie</p>
              <p>О рекламе</p>
              <p>Доступность</p>
            </div>
            <p>© 2024 Spotify AB</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
