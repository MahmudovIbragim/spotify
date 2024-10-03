/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';
import scss from './Artists.module.scss';
import { useParams } from 'react-router-dom';
import { useSearch } from '../../../providers/SearchContext';

const Artists = () => {
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const value = useParams();
  const [data, setArtists] = useState<SEARCH.Item2[]>([]);
  const { search, isSuccess, data: dataArt, isFetching } = useSearch();

  useEffect(() => {
    if (hasMore && value.params) {
      search(value.params, value.type || 'artist', offset);
    }
  }, [value.params, value.type, offset, hasMore]);

  useEffect(() => {
    if (isSuccess && dataArt?.artists?.items) {
      setArtists(prev => [...prev, ...dataArt.artists.items]);
      if (dataArt.artists.items.length < 50) {
        setHasMore(false);
      }
    }
  }, [isSuccess, dataArt]);

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

  return (
    <section className={scss.Artists}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.container_artists}>
            {data != undefined
              ? data.length >= 0
                ? data.map(artist => (
                    <>
                      <div
                        ref={lastElement}
                        key={artist.id}
                        className={scss.card_content}
                      >
                        <div className={scss.card}>
                          <div className={scss.card_img}>
                            <img
                              src={
                                artist.images &&
                                artist.images[1] &&
                                artist.images[1].url
                                  ? artist.images[1].url
                                  : 'https://developer.spotify.com/images/guidelines/design/logo-misuse1.svg'
                              }
                              alt='artist image'
                            />
                          </div>
                          <div className={scss.card_title}>
                            <p>{artist.name || 'err name'}</p>
                            <p>Художниик</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                : null
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
