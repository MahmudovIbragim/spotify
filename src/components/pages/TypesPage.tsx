import { useParams } from 'react-router-dom';
import Artists from './type/Artists';
import Track from './type/Track';
import Playlist from './type/Playlist';
import Albom from './type/Albom';

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
      ) : value.type === 'album' ? (
        <>
          <Albom />
        </>
      ) : null}
    </>
  );
};

export default TypesPage;
