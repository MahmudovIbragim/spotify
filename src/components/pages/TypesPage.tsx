import { useParams } from 'react-router-dom';
import Artists from './artists/Artists';
import Track from './artists/Track';
import Playlist from './artists/Playlist';

const TypesPage = () => {
  const value = useParams();

  return (
    <>
      {value.type === 'artist' ? (
        <>
          <Artists />
        </>
      ) : value.type === 'track' ? (
        <>
          <Track />
        </>
      ) : value.type === 'playlist' ? (
        <>
          <Playlist />
        </>
      ) : null}
    </>
  );
};

export default TypesPage;
