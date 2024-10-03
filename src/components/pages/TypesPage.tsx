import { useParams } from 'react-router-dom';
import Artists from './artists/Artists';
import Track from './artists/Track';

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
      ) : null}
    </>
  );
};

export default TypesPage;
