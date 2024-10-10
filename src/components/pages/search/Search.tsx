import { useNavigate } from 'react-router-dom';
import scss from './Search.module.scss';
import { FC } from 'react';
interface TypeProps {
  searchData?: SEARCH.GetSearchRes;
  isSuccess: boolean;
}

const Search: FC<TypeProps> = ({ searchData, isSuccess }) => {
  const navigate = useNavigate();

  const formatDuration = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div className={scss.Search}>
        <div className='container'>
          <div className={scss.Content}>
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
                                  searchData?.artists?.items?.[0]?.images?.[0]
                                    ?.url ||
                                  'https://developer.spotify.com/images/guidelines/design/logo-misuse1.svg'
                                }
                                alt='image'
                              />
                            </div>
                            <div className={scss.res_title}>
                              <div className={scss.txt}>
                                <p
                                  onClick={() => {
                                    navigate(
                                      `/artist/${searchData.artists.items[0].id}`,
                                    );
                                  }}
                                >
                                  {searchData?.artists?.items?.[0]?.name ||
                                    'error response'}
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
                          {searchData?.tracks?.items?.slice(0, 4).map(trakc => (
                            <div className={scss.trak} key={trakc.id}>
                              <div className={scss.left_info}>
                                <div className={scss.img}>
                                  <img
                                    src={trakc.album.images[2]?.url || ''}
                                    alt=''
                                  />
                                </div>
                                <div className={scss.trak_title}>
                                  <p>{trakc.name}</p>
                                  <p>
                                    {trakc.artists.map(i => (
                                      <span
                                        onClick={() => {
                                          navigate(`/artist/${i.id}`);
                                        }}
                                        key={i.id}
                                        className={
                                          trakc.artists.length > 1
                                            ? scss.before
                                            : scss.span
                                        }
                                      >
                                        {i.name}
                                      </span>
                                    ))}
                                  </p>
                                </div>
                              </div>
                              <div className={scss.trak_duration}>
                                <p>{formatDuration(trakc.duration_ms)}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <h2>Response Error</h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
