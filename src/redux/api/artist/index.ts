import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetArtist: build.query<ARTIST.GetArtistByIdRes, ARTIST.GetArtistByIdRec>({
      query: id => ({
        url: `https://api.spotify.com/v1/artists/${id.id}`,
        method: 'GET',
      }),
    }),
    GetArtistTopTracks: build.query<
      ARTIST.GetArtistTopTracksRes,
      ARTIST.GetArtistTopTracksRec
    >({
      query: ({ id }) => ({
        url: `https://api.spotify.com/v1/artists/${id}/top-tracks`,
        method: 'GET',
        params: {
          market: 'KG',
        },
      }),
      providesTags: ['music'],
    }),
  }),
});

export const { useGetArtistQuery, useGetArtistTopTracksQuery } = api;
