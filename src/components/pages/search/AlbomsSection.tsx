import { FC } from 'react';
import scss from './AlbomsSection.module.scss';
import { useNavigate } from 'react-router-dom';

interface TypeProps {
  searchData?: SEARCH.GetSearchRes;
}
const AlbomsSection: FC<TypeProps> = ({ searchData }) => {
  const navigate = useNavigate();
  const formatDate = (realist_date: string) => {
    const year = realist_date.split('-')[0];
    return year;
  };
  return (
    <section className={scss.Alboms}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.section_sq}>
            <h2>Альбомы</h2>
            <div className={scss._container}>
              {searchData?.albums?.items.slice(0, 8).map(albom => (
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
                      <p>
                        <span>{formatDate(albom.release_date)}</span>
                        <span>•</span>
                        <span
                          onClick={() => {
                            navigate(`/artist/${albom.artists[0].id}`);
                          }}
                        >
                          {albom.artists[0].name}
                        </span>
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbomsSection;
