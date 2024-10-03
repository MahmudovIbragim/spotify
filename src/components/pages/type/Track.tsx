/* eslint-disable react-hooks/exhaustive-deps */
import scss from './Track.module.scss';
import { IconDuration, IconHvTrack } from '../../../assets/icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearch } from '../../../providers/SearchContext';
import { useParams } from 'react-router-dom';

const Track = () => {
  const value = useParams();
  const [data, setTracks] = useState<SEARCH.Item[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { isFetching, isSuccess, search, data: dataTRK } = useSearch();

  useEffect(() => {
    if (hasMore) {  
      search(value.params ?? '', value.type!, offset);
    }
  }, [value.params, value.type, offset, hasMore]);

  useEffect(() => {
    if (isSuccess && data) {
      if (dataTRK?.tracks && dataTRK?.tracks.items) {
        setTracks(prev => [...prev, ...dataTRK.tracks.items]);
        if (dataTRK?.tracks.items.length < 50) {
          setHasMore(false);
        }
      }
    }
  }, [isSuccess, dataTRK]);

  const obServer = useRef<IntersectionObserver | null>(null);
  const lastElement: (node: HTMLDivElement) => void = useCallback(
    (node: Element) => {
      if (isFetching) return;
      if (obServer.current) obServer.current.disconnect();

      obServer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset(prev => prev + 50);
        }
      });
      if (node) obServer.current.observe(node);
    },
    [isFetching, hasMore],
  );

  const formatDuration = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className={scss.Track}>
      <div className={scss.content_title}>
        <div className={scss.hrsef_}>
          <p>#</p>
        </div>
        <div className={scss.title}>
          <p>Заголовок</p>
        </div>
        <div className={scss.albom}>
          <p>Альбом</p>
        </div>
        <div className={scss.duration}>
          <span>
            <IconDuration />
          </span>
        </div>
      </div>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.container_tracks}>
            {data.length > 0
              ? data.map((track, index) => (
                  <>
                    <div
                      key={track.id}
                      ref={lastElement}
                      className={scss.column_item}
                    >
                      <div className={scss.item}>
                        <div className={scss.index}>
                          <p>{index + 1}</p>
                          <span>
                            <IconHvTrack />
                          </span>
                        </div>
                        <div className={scss.music}>
                          <img src={track.album.images[2].url} alt='image' />
                          <div className={scss.music_title}>
                            <p>{track.name}</p>
                            {track.artists.map(art => (
                              <>
                                <a href={art.href}>
                                  <span onClick={() => {}}>{art.name} </span>
                                </a>
                              </>
                            ))}
                          </div>
                        </div>
                        <div className={scss.music_albom}>
                          <p>{track.album.name}</p>
                        </div>
                        <div className={scss.music_duration}>
                          <p>{formatDuration(track.duration_ms)}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
