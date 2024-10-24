import { FC } from 'react';
import scss from './AlbomsSection.module.scss';
import { useNavigate } from 'react-router-dom';

interface TypeProps {
  searchData?: SEARCH.GetSearchRes;
}
const AlbomsSection: FC<TypeProps> = ({ searchData }) => {
  const navigate = useNavigate();

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
    console.log(color);

    navigate(`/albom/${color}/${id}`);
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
                  <div
                    className={scss._card}
                    key={albom.id}
                    onClick={() => {
                      getColorFromImage(albom.id);
                    }}
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
                      <p>
                        <span>{albom.release_date.split('-')[0]}</span>
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
