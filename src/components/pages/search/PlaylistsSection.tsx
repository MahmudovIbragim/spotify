import { FC } from 'react';
import scss from './PlaylistSection.module.scss';

interface TypeProps {
  searchData: SEARCH.GetSearchRes;
}

const PlaylistsSection: FC<TypeProps> = ({ searchData }) => {
  return (
    <section className={scss.Playlist}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.section_sq}>
            <h2>Плейлисты</h2>
            <div className={scss._container}>
              {searchData?.playlists?.items.slice(0, 8).map(playlist => (
                <>
                  <div className={scss._card}>
                    <div className={scss._img}>
                      <img
                        src={
                          playlist.images && playlist.images[1]
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
        </div>
      </div>
    </section>
  );
};

export default PlaylistsSection;
