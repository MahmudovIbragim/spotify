import { useState } from 'react';
import { useGetReccomendationsQuery } from '../../../redux/api/getRecomen';
import scss from './Home.module.scss';
import { IconPlay } from '../../../assets/icons';
import Player from '../../../ui/player/Player';

const Home = () => {
  const [panel, setPanel] = useState<boolean>(false);
  const [uri, setUri] = useState<string | null>('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState('');
  const { data, isSuccess } = useGetReccomendationsQuery({
    limit: 20,
    market: 'KH',
    seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
    seed_genres: 'classical,country',
    seed_tracks: '0c6xIDDpzE81m2q797ordA',
  });

  if (!isSuccess) {
    return (
      <>
        <div className={scss.Section}>
          <div className='container'>
            <div className={scss.title}>
              <h2>Error Token, click profle</h2>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className={scss.Section}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.title}>
            <h2>Recomendation</h2>
          </div>
          <div className={scss.section_container}>
            {data?.tracks.map(
              item => (
                console.log(),
                (
                  <>
                    <div
                      key={item.id}
                      className={scss.card}
                      onClick={() => {
                        if (item.preview_url != null) {
                          setPanel(true);
                          setUri(item.preview_url!);
                          setName(item.name);
                          setLastName(item.album.name);
                          setImage(item.album.images[2].url);
                        } else if (item.preview_url === null) {
                          setPanel(true);
                          setUri(null);
                          setName(item.name);
                          setLastName(item.album.name);
                          setImage(item.album.images[2].url);
                        }
                      }}
                    >
                      <div
                        className={scss.bg_content}
                        style={{
                          backgroundImage: `url(${item.album.images[1].url})`,
                        }}
                      >
                        <div className={scss.playIcon}>
                          <button>
                            <IconPlay />
                          </button>
                        </div>
                      </div>
                      <div className={scss.music}>
                        <p className={scss.name}>{item.name}</p>
                        <p className={scss.executor}>{item.album.name}</p>
                      </div>
                    </div>
                  </>
                )
              ),
            )}
          </div>
          {panel ? (
            <Player name={name} url={uri} lastName={lastName} image={image} />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Home;
