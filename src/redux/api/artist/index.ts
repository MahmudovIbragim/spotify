import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetArtist: build.query<ARTIST.GetArtistByIdRes, ARTIST.GetArtistByIdRec>({
      query: id => ({
        url: `https://api.spotify.com/v1/artists/${id.id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetArtistQuery } = api;
