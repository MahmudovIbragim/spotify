import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  IconBell,
  IconBlackLogo,
  IconDownload,
  IconHome,
} from '../../../assets/icons';
import scss from './Header.module.scss';
import Input from '../../../ui/input/Input';
import { useEffect, useState } from 'react';
import { useSearch } from '../../../providers/SearchContext';
import { useGetCurrentUserProfileQuery } from '../../../redux/api/user';
interface DataType {
  id: number;
  title: string;
  type: string;
  isActive: boolean;
}

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const value = useParams();
  const { data } = useGetCurrentUserProfileQuery();
  const [isDrop, setIsDrop] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');
  const [activedType] = useState(false);
  const initialDataTypes: DataType[] = [
    {
      id: 1,
      title: 'Все',
      type: `album,artist,playlist,track,show,episode,audiobook`,
      isActive: true,
    },
    { id: 2, title: 'Художники', type: 'artist', isActive: activedType },
    { id: 3, title: 'Песни', type: 'track', isActive: activedType },
    { id: 4, title: 'Плейлисты', type: 'playlist', isActive: activedType },
    { id: 5, title: 'Альбомы', type: 'album', isActive: activedType },
    { id: 7, title: 'Аудио книги', type: 'audiobook', isActive: activedType },
    {
      id: 6,
      title: 'Подкасты и программы',
      type: 'show',
      isActive: activedType,
    },
    { id: 8, title: 'Эпизоды', type: 'episode', isActive: activedType },
  ];

  const [dataTypes, setDataTypes] = useState<DataType[]>(initialDataTypes);

  const { search } = useSearch();

  useEffect(() => {
    if (!token && window.location.hash) {
      const newToken = window.location.hash
        .substring(1)
        .split('&')
        .find(param => param.startsWith('access_token'))
        ?.split('=')[1];
      if (newToken) {
        setToken(newToken);
        localStorage.setItem('token', newToken);
        localStorage.setItem('isToken', 'true');
      }
    }
  }, [token]);
  const handleClick = (id: number) => {
    setDataTypes(prevDataTypes =>
      prevDataTypes.map(item =>
        item.id === id
          ? { ...item, isActive: true }
          : { ...item, isActive: false },
      ),
    );
  };

  useEffect(() => {
    if (value.params === undefined) {
      setDataTypes(prevDataTypes =>
        prevDataTypes.map(item =>
          item.id === 1
            ? { ...item, isActive: true }
            : { ...item, isActive: false },
        ),
      );
    }
  }, [value.params]);

  const hadnleSearch = (id: number, type: string) => {
    if (id === 1) {
      search(value.params!, type!, 10);
      navigate(`/search/${value.params}`);
      handleClick(id);
    } else {
      handleClick(id);
      navigate(`/search/${value.params}/${type}`);
    }
  };

  return (
    <header className={scss.Header}>
      <div className='container'>
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
                localStorage.removeItem('searchTrem');
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
                >
                  <img src={data?.images[1].url || ''} alt='image ' />
                </div>
              </figure>
            </button>
            <div className={isDrop ? scss.drop_out : scss.none}>
              <ul>
                <li>
                  <p>Счет</p>
                </li>
                <li
                  onClick={() => {
                    navigate('/profile');
                    setIsDrop(false);
                  }}
                >
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
                    localStorage.setItem('isToken', 'false');
                    setIsDrop(false);
                  }}
                >
                  <button>Выйти</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {location.pathname.startsWith('/search/') ? (
          <>
            <div className={scss.types_search}>
              <ul>
                {dataTypes.map(item => (
                  <>
                    <li
                      className={`${item.isActive ? scss.active : ''} ${''}  `}
                      onClick={() => {
                        hadnleSearch(item.id, item.type);
                      }}
                      key={item.id}
                    >
                      <button>{item.title}</button>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
