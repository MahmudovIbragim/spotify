import { FC } from 'react';
import scss from './Artists.module.scss';
import { useNavigate } from 'react-router-dom';
interface TypeProps {
  searchData: SEARCH.GetSearchRes;
}

const ArtistsSection: FC<TypeProps> = ({ searchData }) => {
  const navigate = useNavigate();
  return (
    <section className={scss.Artists}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.section_artista}>
            <h2>Художники</h2>
            <div className={scss.artista_container}>
              {searchData?.artists?.items?.slice(0, 8).map(artista => (
                <div
                  onClick={() => {
                    navigate(`/artist/${artista.id}`);
                  }}
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
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
