/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';
import scss from './Albom.module.scss';
import { useParams } from 'react-router-dom';
import { useSearch } from '../../../providers/SearchContext';

type AlbomItems = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: SEARCH.ExternalUrls6;
  href: string;
  id: string;
  images: SEARCH.Image3[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: SEARCH.Restrictions3;
  type: string;
  uri: string;
  artists: SEARCH.Artist3[];
};

const AlbomType = () => {
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const value = useParams();
  // const navigate = useNavigate();
  const [data, setAlboms] = useState<AlbomItems[] | null>(null);
  const { search, data: dataAlbom, isFetching, isSuccess } = useSearch();
  console.log(data);

  useEffect(() => {
    if (hasMore && value.params) {
      search(value.params, value.type || 'album', offset);
    }
  }, [value.params, value.type, offset, hasMore]);

  useEffect(() => {
    if (isSuccess && dataAlbom?.albums.items) {
      const filteredItems = dataAlbom.albums.items.filter(
        item => item !== null,
      );
      setAlboms(filteredItems);
      if (dataAlbom.albums.items.length < 50) {
        setHasMore(false);
      }
    }
  }, [isSuccess, dataAlbom]);

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

  const formatDate = (realese_date: string) => {
    const year = realese_date.split('-')[0];
    return year;
  };

  return (
    <section className={scss.Albom}>
      <div className='container'>
        <div className={scss.Content}>
          <div className={scss.container_alboms}>
            {data !== null &&
              data.map(albom => (
                <>
                  <div className={scss.albom_card} ref={lastElement}>
                    <div className={scss.card}>
                      <div className={scss.card_img}>
                        <img
                          src={
                            albom.images[1].url ??
                            'https://developer.spotify.com/images/guidelines/design/logo-misuse1.svg'
                          }
                          alt='image'
                        />
                      </div>
                      <div className={scss.card_title}>
                        <p>{albom.name}</p>
                      </div>
                      <div className={scss.desc}>
                        <span>{formatDate(albom.release_date)}</span>
                        <span>•</span>
                        {albom.artists.map(el => (
                          <>
                            <span
                              className={
                                albom.artists.length > 1
                                  ? scss.spans
                                  : scss.span
                              }
                            >
                              {el.name}
                            </span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbomType;
