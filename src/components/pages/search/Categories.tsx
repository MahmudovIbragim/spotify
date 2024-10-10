import { FC } from 'react';
import scss from './Categories.module.scss';

interface TypeProps {
  data?: BROWSECATEGORY.GetBrowseCategoryRes;
  getColorFromImage: (id: string) => void;
}

const Categories: FC<TypeProps> = ({ data, getColorFromImage }) => {
  return (
    <section className={scss.Categories}>
      <div className='container'>
        <div className={scss.Content}>
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
        </div>
      </div>
    </section>
  );
};

export default Categories;
