import { useNavigate, useParams } from 'react-router-dom';
import { useGetBrowseCategoryQuery } from '../../../redux/api/browserCategory';
import scss from './Search.module.scss';
import { useGetSearchQuery } from '../../../redux/api/search';
import { useState } from 'react';

interface DataType {
  id: number;
  title: string;
  type: string;
  isActive: boolean;
}

const initialDataTypes: DataType[] = [
  {
    id: 1,
    title: 'Все',
    type: `artist,track,playlist,audiobook,show,album,episode`,
    isActive: true,
  },
  { id: 2, title: 'Художники', type: 'artist', isActive: false },
  { id: 3, title: 'Песни', type: 'track', isActive: false },
  { id: 4, title: 'Плейлисты', type: 'playlist', isActive: false },
  { id: 5, title: 'Аудио книги', type: 'audiobook', isActive: false },
  { id: 6, title: 'Подкасты и программы', type: 'show', isActive: false },
  { id: 7, title: 'Альбомы', type: 'album', isActive: false },
  { id: 8, title: 'Эпизоды', type: 'episode', isActive: false },
];

const Search = () => {
  const navigate = useNavigate();
  const { data } = useGetBrowseCategoryQuery();
  const value = useParams();
  const [dataTypes, setDataTypes] = useState<DataType[]>(initialDataTypes);
  const { data: searchData, isSuccess } = useGetSearchQuery({
    q: value.params != undefined ? value.params : '',
    type: dataTypes.find(i => (i.isActive ? i.type : i.id === 1 ? i.type : ''))
      ?.type,
  });

  const getColorFromImage = async (id: string) => {
    const randomColor = () => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      if (brightness < 128) {
        r += 128;
        g += 128;
        b += 128;
      }

      return `${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    };

    const color = randomColor();

    navigate(`/genre/${id}/${color}`);
  };

  const handleClick = (id: number) => {
    setDataTypes(prevDataTypes =>
      prevDataTypes.map(item =>
        item.id === id
          ? { ...item, isActive: true }
          : { ...item, isActive: false },
      ),
    );
  };

  const formatDuration = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };


  return (
    <div className={scss.Search}>
      <div className='container'>
        <div className={scss.Content}>
          {value.params != undefined ? (
            <div className={scss.search_contaienr}>
              <div className={scss.types_search}>
                <ul>
                  {dataTypes.map(item => (
                    <>
                      <li
                        className={item.isActive ? scss.active : ''}
                        onClick={() => {
                          handleClick(item.id);
                        }}
                        key={item.id}
                      >
                        <button>{item.title}</button>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              {isSuccess ? (
                <>
                  <div className={scss.res_content}>
                    <div className={scss.res_artist}>
                      <p>Лучший результат</p>
                      <div className={scss.res_card}>
                        <div className={scss.res_info}>
                          <div className={scss.img}>
                            <img
                              src={
                                searchData?.artists?.items?.[0]?.images?.[0]
                                  ?.url ||
                                'https://developer.spotify.com/images/guidelines/design/logo-misuse1.svg'
                              }
                              alt='image'
                            />
                          </div>
                          <div className={scss.res_title}>
                            <div className={scss.txt}>
                              <p>{searchData?.artists.items[0].name}</p>
                              <p>Художник</p>
                            </div>
                            <div className={scss.btn_hover}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {searchData.tracks.items.length != 0 ? (
                      <>
                        <div className={scss.trak_content}>
                          <p>Песни</p>
                          <div className={scss.trak_container}>
                            {searchData?.tracks.items.slice(0, 4).map(trakc => (
                              <>
                                <div className={scss.trak}>
                                  <div className={scss.left_info}>
                                    <div className={scss.img}>
                                      <img
                                        src={trakc.album.images[2].url}
                                        alt=''
                                      />
                                      {/* icon */}
                                    </div>
                                    <div className={scss.trak_title}>
                                      <p>{trakc.name}</p>
                                      <p>
                                        {trakc.artists.map(i => (
                                          <>
                                            <span
                                              className={
                                                trakc.artists.length >= 2
                                                  ? scss.before
                                                  : ''
                                              }
                                            >
                                              {i.name || ''}
                                            </span>
                                          </>
                                        ))}
                                      </p>
                                    </div>
                                  </div>
                                  <div className={scss.trak_duration}>
                                    <p>{formatDuration(trakc.duration_ms)}</p>
                                  </div>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div className={scss.seaction_with}>
                    <h2>С {value.params}</h2>
                    <div className={scss.with_container}>
                      <div className={scss.with_card}>
                        <div className={scss.with_card_bg}></div>
                        <p></p>
                        <p></p>
                      </div>
                    </div>
                  </div>

                  {searchData.artists.items.length != 0 ? (
                    <>
                      <div className={scss.section_artista}>
                        <h2>Художники</h2>
                        <div className={scss.artista_container}>
                          {searchData?.artists?.items
                            ?.slice(0, 8)
                            .map(artista => (
                              <div
                                className={scss.artista_card}
                                key={artista.id}
                              >
                                <div className={scss.card_img}>
                                  <img
                                    src={
                                      artista?.images?.[0]?.url ||
                                      'https://developer.spotify.com/images/guidelines/design/logo-misuse1.svg'
                                    }
                                    alt='image'
                                  />
                                </div>
                                <p>{artista.name || ''}</p>
                                <p>Художники</p>
                              </div>
                            ))}
                        </div>
                      </div>
                    </>
                  ) : null}

                  {searchData.albums.items.length != 0 ? (
                    <>
                      <div className={scss.section_sq}>
                        <h2>Альбомы</h2>
                        <div className={scss._container}>
                          {searchData?.albums.items.slice(0, 8).map(albom => (
                            <>
                              <div className={scss._card} key={albom.id}>
                                <div className={scss._img}>
                                  <img
                                    src={
                                      albom.images[0].url ||
                                      'https://developer.spotify.com/images/guidelines/design/logo-misuse1.svg'
                                    }
                                    alt='image'
                                  />
                                </div>
                                <div className={scss._title}>
                                  <p>{albom.name}</p>
                                  <p>{albom.artists[0].name}</p>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : null}

                  {searchData.playlists.items.length != 0 ? (
                    <>
                      <div className={scss.section_sq}>
                        <h2>Плейлисты</h2>
                        <div className={scss._container}>
                          {searchData?.playlists.items
                            .slice(0, 8)
                            .map(playlist => (
                              <>
                                <div className={scss._card}>
                                  <div className={scss._img}>
                                    <img
                                      src={
                                        playlist.images && playlist.images[1]
                                          ? playlist.images[1].url
                                          : 'https://developer.spotify.com/images/guidelines/design/logo-misuse1.svg'
                                      }
                                      alt='image'
                                    />
                                  </div>
                                  <div className={scss._title}>
                                    <p>{playlist.name}</p>
                                  </div>
                                </div>
                              </>
                            ))}
                        </div>
                      </div>
                    </>
                  ) : null}

                  {searchData.shows.items.length != 0 ? (
                    <>
                      <div className={scss.section_sq}>
                        <h2>Подкасты</h2>
                        <div className={scss._container}>
                          {searchData.shows.items.slice(0, 8).map(shows => (
                            <>
                              <div className={scss._card}>
                                <div className={scss._img}>
                                  <img
                                    src={
                                      shows.images && shows.images[1]
                                        ? shows.images[1].url
                                        : 'https://developer.spotify.com/images/guidelines/design/logo-misuse1.svg'
                                    }
                                    alt='image'
                                  />
                                </div>
                                <div className={scss._title}>
                                  <p>{shows.name}</p>
                                  <p>{shows.publisher}</p>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : null}

                  {searchData.episodes.items.length != 0 ? (
                    <>
                      <div className={scss.section_sq}>
                        <h2>Эпизоды</h2>
                        <div className={scss._container}>
                          {searchData.episodes.items.slice(0, 8).map(episod => (
                            <>
                              <div className={scss._card}>
                                <div className={scss._img}>
                                  <img
                                    src={
                                      episod.images && episod.images[1]
                                        ? episod.images[1].url
                                        : 'https://developer.spotify.com/images/guidelines/design/logo-misuse1.svg'
                                    }
                                    alt='image'
                                  />
                                </div>
                                <div className={scss._title}>
                                  <p>{episod.name}</p>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : null}
                </>
              ) : (
                <>
                  <h2>Response Error</h2>
                </>
              )}
            </div>
          ) : (
            <>
              <h2>Просмотреть все разделы</h2>
              <div className={scss.container_cards}>
                {data?.categories.items.map(item => (
                  <div className={scss.card_gap} key={item.id}>
                    <div
                      className={scss.card}
                      onClick={() => {
                        getColorFromImage(item.id);
                      }}
                      style={{ backgroundImage: `url(${item.icons[0].url})` }}
                    >
                      <p>{item.name}</p>
                      <div className={scss.bg_img}></div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
