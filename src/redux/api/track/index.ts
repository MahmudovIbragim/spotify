import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetSeveralTracks: build.query<
      Tracks.GetSeveralTracksRes,
      Tracks.GetSeveralTracksReq
    >({
      query: ids => ({
        url: 'tracks',
        method: 'GET',
        ids: ids,
        market: 'KG',
      }),
      providesTags: ['music'],
    }),
  }),
});

export const { useGetSeveralTracksQuery } = api;
