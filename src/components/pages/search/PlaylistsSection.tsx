import { FC, useEffect, useState } from 'react';
import scss from './PlaylistSection.module.scss';

interface TypeProps {
  searchData: SEARCH.GetSearchRes;
}

type PlaylistItems = {
  collaborative: boolean;
  description: string;
  external_urls: SEARCH.ExternalUrls8;
  href: string;
  id: string;
  images: SEARCH.Image4[];
  name: string;
  owner: SEARCH.Owner;
  public: boolean;
  snapshot_id: string;
  tracks: SEARCH.Tracks2;
  type: string;
  uri: string;
};

const PlaylistsSection: FC<TypeProps> = ({ searchData }) => {
  const [playlistItems, setPlayListItems] = useState<PlaylistItems[] | null>(
    null,
  );

  useEffect(() => {
    if (searchData?.playlists?.items) {
      const filteredItems = searchData.playlists.items.filter(
        item => item !== null,
      );
      setPlayListItems(filteredItems);
    }
  }, []);

  return (
    <section className={scss.Playlist}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.section_sq}>
            <h2>Плейлисты</h2>
            <div className={scss._container}>
              {playlistItems !== null &&
                playlistItems.slice(0, 8).map(playlist => (
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
