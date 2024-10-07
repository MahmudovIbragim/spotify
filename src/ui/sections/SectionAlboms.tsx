import { FC } from 'react';
import scss from './Section.module.scss';

interface TypeProps {
  data?: ARTIST.GetArtistAlbomsRes;
}

const SectionAlboms: FC<TypeProps> = ({ data }) => {
  return (
    <section className={scss.Section}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.container}>
            {data?.items.map(item => (
              <>
                <div className={scss.column}>
                  <div className={scss.card}>
                    <div className={scss.card_content}>
                      <div className={scss.card_img}>
                        <img src={item.images[1].url} alt='image' />
                      </div>
                      <div className={scss.card_title}>
                        <p>{item.name}</p>
                        <p>{item.release_date.split('-')[0]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAlboms;
