/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearch } from '../../../providers/SearchContext';
import scss from './Playlist.module.scss';
import { useParams } from 'react-router-dom';
console.log('tst');

const Playlist = () => {
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [newData, setNewData] = useState<SEARCH.Item4[]>([]);
  const { search, data, isSuccess, isFetching } = useSearch();
  const value = useParams();
  console.log(data?.playlists);

  useEffect(() => {
    if (hasMore && value.params) {
      search(value.params, value.type!, offset);
    }
  }, [value.params, value.type, offset, hasMore]);

  useEffect(() => {
    if (isSuccess && data?.playlists?.items) {
      setNewData(prev => [...data.playlists.items, ...prev]);
      if (data.playlists.items.length < 50) {
        setHasMore(false);
      }
    }
  }, [isSuccess, data]);

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
    <div className={scss.Playlist}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.container}>
            {newData.map(el => (
              <>
                <div className={scss.card} key={el.id} ref={lastElement}>
                  <div className={scss.card_content}>
                    <div className={scss.img}>
                      <img
                        src={
                          el.images[0].url ||
                          'https://developer.spotify.com/images/guidelines/design/logo-misuse1.svg'
                        }
                        alt='image'
                      />
                    </div>
                    <div className={scss.card_title}>
                      <p>{el.name}</p>
                      <p>{el.owner.display_name}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
