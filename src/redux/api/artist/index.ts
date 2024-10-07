import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetArtist: build.query<ARTIST.GetArtistByIdRes, ARTIST.GetArtistByIdRec>({
      query: id => ({
        url: `/artists/${id.id}`,
        method: 'GET',
      }),
    }),
    GetArtistTopTracks: build.query<
      ARTIST.GetArtistTopTracksRes,
      ARTIST.GetArtistTopTracksRec
    >({
      query: ({ id }) => ({
        url: `/artists/${id}/top-tracks`,
        method: 'GET',
        params: {
          market: 'KG',
        },
      }),
      providesTags: ['music'],
    }),
    GetArtistAlboms: build.query<
      ARTIST.GetArtistAlbomsRes,
      ARTIST.GetArtistAlbomsRec
    >({
      query: ({ id, offset }) => ({
        url: `/artists/${id}/albums`,
        method: 'GET',
        params: {
          limit: 9,
          include_groups: ' album,single,appears_on,compilation',
          market: 'KG',
          offset: offset,
        },
      }),
      providesTags: ['music'],
    }),
  }),
});

export const {
  useGetArtistQuery,
  useGetArtistTopTracksQuery,
  useGetArtistAlbomsQuery,
} = api;
