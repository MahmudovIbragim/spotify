import { Link, useLocation, useParams } from 'react-router-dom';
import scss from './Albom.module.scss';
import { useGetAlbomByIdQuery } from '../../../redux/api/alboms';
import { useColorContext } from '../../../providers/BgColorContext';
import { useEffect } from 'react';

const Albom = () => {
  const params = useParams();
  const { contentColor, darkColor, darkerColor } = useColorContext();
  const { pathname } = useLocation();

  const { data } = useGetAlbomByIdQuery({ id: params.id! });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className={scss.AlbomPage}>
      <div
        className={scss.albom_info}
        style={{
          background: `linear-gradient(180deg, #${params.color} 0%, ${contentColor} 100%)`,
        }}
      >
        <div className={scss.albom_info_container}>
          <div className={scss.image}>
            <img
              src={data?.images[1].url}
              alt=''
              style={{
                WebkitBoxShadow: ` 0px 0px 10px 1px   #${'000'}`,
                MozBoxShadow: ` 0px 0px 10px 1px   #${'000'}`,
                boxShadow: ` 0px 0px 10px 1px  #${'0000'}`,
              }}
            />
          </div>
          <div className={scss.title}>
            <p>Альбом</p>
            <h1>{data?.name}</h1>
            <div className={scss.desc}>
              <div className={scss.artist}>
                {data?.artists.map(art => (
                  <>
                    <Link to={`/artist/${art.id}`}>
                      <p>{art.name}</p>
                    </Link>
                    <span>•</span>
                  </>
                ))}
              </div>
              <p>{data?.release_date}</p>
            </div>
          </div>
        </div>
        <div
          className={scss.box}
          style={{ width: '30px', height: 30, backgroundColor: darkColor }}
        ></div>
        <div
          className={scss.box}
          style={{ width: '30px', height: 30, backgroundColor: darkerColor }}
        ></div>
      </div>

      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.track_container}>
            <div className={scss.track}>
              <div className={scss.track_index}>
                <p></p>
              </div>
              <div className={scss.track_title}>
                <p></p>
                <Link to={'#'}>
                  <p></p>
                </Link>
              </div>
              <div className={scss.track_duration}>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Albom;
