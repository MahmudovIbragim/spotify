import { useParams } from 'react-router-dom';
import scss from './Artist.module.scss';
import { useGetArtistQuery } from '../../../redux/api/artist';
import { IconChekMark } from '../../../assets/icons';

const Artist = () => {
  const params = useParams();
  const { data } = useGetArtistQuery({ id: params.id });

  return (
    <div className={scss.Artist}>
      <div className={scss.artist_info}>
        <div className={scss.artist_profil}>
          <img src={data?.images[1].url} alt='' />
        </div>
        <div className={scss.artist_title}>
          <p>
            <span>
              <IconChekMark />
            </span>
            Проверенный исполнитель
          </p>
          <h1>{data?.name}</h1>
          <p>{data?.followers.total} слушателей в месяц</p>
        </div>
      </div>
      <div className='contaienr'>
        <div className={scss.Content}></div>
      </div>
    </div>
  );
};

export default Artist;
