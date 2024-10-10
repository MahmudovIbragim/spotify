import { FC } from 'react';
import scss from './PodcastSection.module.scss';

interface TypeProps {
  searchData?: SEARCH.GetSearchRes;
}

const PodcastSection: FC<TypeProps> = ({ searchData }) => {
  return (
    <section className={scss.Podcast}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.section_sq}>
            <h2>Подкасты</h2>
            <div className={scss._container}>
              {searchData?.shows?.items.slice(0, 8).map(shows => (
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
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
