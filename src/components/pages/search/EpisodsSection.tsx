import { FC } from 'react';
import scss from './EpisodsSection.module.scss';

interface TypeProps {
  searchData?: SEARCH.GetSearchRes;
}

const EpisodsSection: FC<TypeProps> = ({ searchData }) => {
  return (
    <section className={scss.Episode}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.section_sq}>
            <h2>Эпизоды</h2>
            <div className={scss._container}>
              {searchData?.episodes?.items.slice(0, 8).map(episod => (
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
        </div>
      </div>
    </section>
  );
};

export default EpisodsSection;
