import { useParams } from 'react-router-dom';
import Artists from './type/Artists';
import Track from './type/Track';
import Playlist from './type/Playlist';

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
