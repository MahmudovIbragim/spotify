/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetBrowseCategoryQuery } from '../../redux/api/browserCategory';
import Search from './search/Search';
import { useSearch } from '../../providers/SearchContext';
import { useEffect } from 'react';
import ArtistsSection from './search/ArtistsSection';
import AlbomsSection from './search/AlbomsSection';
import PlaylistsSection from './search/PlaylistsSection';
import PodcastSection from './search/PodcastSection';
import EpisodsSection from './search/EpisodsSection';
import Categories from './search/Categories';

const SearchPage = () => {
  const { data } = useGetBrowseCategoryQuery();
  const value = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { search, data: searchData, isSuccess } = useSearch();

  useEffect(() => {
    if (value.params != undefined) {
      search(
        value.params!,
        value.type || 'album,artist,playlist,track,show,episode,audiobook',
        10,
      );
    }
  }, [value.type, value.params, location.pathname]);

  const getColorFromImage = async (id: string) => {
    const randomColor = () => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      if (brightness < 128) {
        r += 128;
        g += 128;
        b += 128;
      }

      return `${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    };

    const color = randomColor();

    navigate(`/genre/${id}/${color}`);
  };

  return value.params != undefined ? (
    <>
      <Search isSuccess={isSuccess} searchData={searchData} />
      {searchData?.artists?.items != undefined ? (
        <>
          <ArtistsSection searchData={searchData} />
        </>
      ) : null}

      {searchData?.albums?.items != undefined ? (
        <>
          <AlbomsSection searchData={searchData} />
        </>
      ) : null}

      {searchData?.playlists?.items != undefined ? (
        <>
          <PlaylistsSection searchData={searchData} />
        </>
      ) : null}

      {searchData?.shows?.items.length != 0 ? (
        <>
          <PodcastSection searchData={searchData} />
        </>
      ) : null}

      {searchData?.episodes?.items.length != 0 ? (
        <>
          <EpisodsSection searchData={searchData} />
        </>
      ) : null}
    </>
  ) : (
    <Categories data={data} getColorFromImage={getColorFromImage} />
  );
};

export default SearchPage;
