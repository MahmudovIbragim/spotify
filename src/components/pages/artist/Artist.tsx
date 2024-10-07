import { useParams } from 'react-router-dom';
import scss from './Artist.module.scss';
import {
  useGetArtistAlbomsQuery,
  useGetArtistQuery,
  useGetArtistTopTracksQuery,
} from '../../../redux/api/artist';
import {
  IconChekMark,
  IconDots,
  IconPlay,
  IconPlus,
} from '../../../assets/icons';
import ButtonPlay from '../../../ui/button/ButtonPlay';
import ButtonSubscrie from '../../../ui/button/ButtonSubscrie';
import { useState } from 'react';
import SectionAlboms from '../../../ui/sections/SectionAlboms';

const Artist = () => {
  const params = useParams();
  const { data } = useGetArtistQuery({ id: params.id });
  const { data: TopTracks } = useGetArtistTopTracksQuery({
    id: params.id,
  });
  const { data: artistAlboms } = useGetArtistAlbomsQuery({
    id: params.id,
    offset: 10,
  });
  const [sliceTrack, setSliceTrack] = useState(5);
  const [trackId, setTrakcId] = useState<null | string>(null);

  const formatDuration = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  console.log(artistAlboms);

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
      <div className={scss.interval_content}>
        <div className={scss.plaing_music}>
          <ButtonPlay
            iconColor='black'
            buttonHeight='56px'
            handleClickFunction={() => {}}
          />
        </div>
        <div className={scss.subscrie_btn}>
          <ButtonSubscrie hadnleClickFunction={() => {}} />
        </div>
        <div className={scss.dots}>
          <span>
            <IconDots />
          </span>
        </div>
      </div>
      <div className='container'>
        <div className={scss.Content}>
          <h2>Популярный</h2>
          <div className={scss.artist_tracks_container}>
            <div className={scss.container_columns}>
              {TopTracks?.tracks.slice(0, sliceTrack).map((music, index) => (
                <>
                  <div
                    key={music.id}
                    className={`${scss.artist_tack_column} ${music.id === trackId ? scss.artist_tack_column_hover : ''}`}
                    onClick={() => {
                      setTrakcId(music.id);
                    }}
                  >
                    <div className={scss.track_index}>
                      <p className={scss.ind_tr}>{index + 1} </p>

                      <p className={scss.icon_play}>
                        <IconPlay />
                      </p>
                    </div>
                    <div className={scss.track}>
                      <img src={music.album.images[2].url} alt='' />
                      <div className={scss.track_title}>
                        <p>{music.name}</p>
                      </div>
                    </div>
                    <div className={scss.track_pupular}>
                      <p>{music.popularity}</p>
                    </div>
                    <div className={scss.track_info}>
                      <p className={scss.add_track}>
                        <IconPlus />
                      </p>
                      <p className={scss.duration_track}>
                        {formatDuration(music.duration_ms)}
                      </p>
                      <p className={scss.mini_dots}>
                        <IconDots />
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <button
              className={scss.more_button}
              onClick={() => {
                if (sliceTrack === 5) {
                  setSliceTrack(sliceTrack + 5);
                } else if (sliceTrack === 10) {
                  setSliceTrack(sliceTrack - 5);
                }
              }}
            >
              {sliceTrack === 5 ? ' Показать больше' : 'Показать меньше'}
            </button>
          </div>
          <div className={scss.alboms}>
            <h2>Дискография</h2>
            <div className={scss.alboms_type}></div>
            <SectionAlboms data={artistAlboms} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
