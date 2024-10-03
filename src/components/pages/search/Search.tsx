/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetBrowseCategoryQuery } from '../../../redux/api/browserCategory';
import scss from './Search.module.scss';
import { useSearch } from '../../../providers/SearchContext';
import { useEffect } from 'react';

const Search = () => {
  const navigate = useNavigate();
  const { data } = useGetBrowseCategoryQuery();
  const value = useParams();
  const location = useLocation();
  const { search, data: searchData, isSuccess } = useSearch();

  useEffect(() => {
    if (value.params != undefined) {
      search(
        value.params!,
        value.type || 'album,artist,playlist,track,show,episode,audiobook',
        10,
      );
    }
  }, [value.type, value.params, location.pathname]);

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

  const formatDuration = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {
        (searchData?.albums,
        searchData?.artists,
        searchData?.audiobooks,
        searchData?.episodes,
        searchData?.playlists,
        searchData?.shows,
        searchData?.tracks != undefined ? (
          <>
            <div className={scss.Search}>
              <div className='container'>
                <div className={scss.Content}>
                  {value.params != undefined ? (
                    <div className={scss.search_contaienr}>
                      {isSuccess ? (
                        <>
                          <div className={scss.res_content}>
                            {searchData?.artists?.items?.[0] && (
                              <div className={scss.res_artist}>
                                <p>Лучший результат</p>
                                <div className={scss.res_card}>
                                  <div className={scss.res_info}>
                                    <div className={scss.img}>
                                      <img
                                        src={
                                          searchData?.artists?.items?.[0]
                                            ?.images?.[0]?.url ||
                                          'https://developer.spotify.com/images/guidelines/design/logo-misuse1.svg'
                                        }
                                        alt='image'
                                      />
                                    </div>
                                    <div className={scss.res_title}>
                                      <div className={scss.txt}>
                                        <p>
                                          {searchData?.artists?.items?.[0]
                                            ?.name || 'error response'}
                                        </p>
                                        <p>Художник</p>
                                      </div>
                                      <div className={scss.btn_hover}></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {searchData?.tracks?.items && (
                              <div className={scss.trak_content}>
                                <p>Песни</p>
                                <div className={scss.trak_container}>
                                  {searchData?.tracks?.items
                                    ?.slice(0, 4)
                                    .map(trakc => (
                                      <div className={scss.trak} key={trakc.id}>
                                        <div className={scss.left_info}>
                                          <div className={scss.img}>
                                            <img
                                              src={
                                                trakc.album.images[2]?.url || ''
                                              }
                                              alt=''
                                            />
                                          </div>
                                          <div className={scss.trak_title}>
                                            <p>{trakc.name}</p>
                                            <p>
                                              {trakc.artists.map((i, index) => (
                                                <span
                                                  key={i.id}
                                                  className={
                                                    trakc.artists.length > 1 &&
                                                    index <
                                                      trakc.artists.length - 1
                                                      ? scss.before
                                                      : ''
                                                  }
                                                >
                                                  {i.name}
                                                </span>
                                              ))}
                                            </p>
                                          </div>
                                        </div>
                                        <div className={scss.trak_duration}>
                                          <p>
                                            {formatDuration(trakc.duration_ms)}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            )}
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

                          {searchData?.artists?.items != undefined ? (
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

                          {searchData?.albums?.items != undefined ? (
                            <>
                              <div className={scss.section_sq}>
                                <h2>Альбомы</h2>
                                <div className={scss._container}>
                                  {searchData?.albums.items
                                    .slice(0, 8)
                                    .map(albom => (
                                      <>
                                        <div
                                          className={scss._card}
                                          key={albom.id}
                                        >
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

                          {searchData?.playlists?.items != undefined ? (
                            <>
                              <div className={scss.section_sq}>
                                <h2>Плейлисты</h2>
                                <div className={scss._container}>
                                  {searchData?.playlists?.items
                                    .slice(0, 8)
                                    .map(playlist => (
                                      <>
                                        <div className={scss._card}>
                                          <div className={scss._img}>
                                            <img
                                              src={
                                                playlist.images &&
                                                playlist.images[1]
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

                          {searchData?.shows?.items.length != 0 ? (
                            <>
                              <div className={scss.section_sq}>
                                <h2>Подкасты</h2>
                                <div className={scss._container}>
                                  {searchData?.shows?.items
                                    .slice(0, 8)
                                    .map(shows => (
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

                          {searchData?.episodes?.items.length != 0 ? (
                            <>
                              <div className={scss.section_sq}>
                                <h2>Эпизоды</h2>
                                <div className={scss._container}>
                                  {searchData?.episodes?.items
                                    .slice(0, 8)
                                    .map(episod => (
                                      <>
                                        <div className={scss._card}>
                                          <div className={scss._img}>
                                            <img
                                              src={
                                                episod.images &&
                                                episod.images[1]
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
                              style={{
                                backgroundImage: `url(${item.icons[0].url})`,
                              }}
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
          </>
        ) : null)
      }
    </>
  );
};

export default Search;
