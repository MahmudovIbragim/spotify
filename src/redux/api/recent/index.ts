/* eslint-disable @typescript-eslint/no-explicit-any */
import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetRecent: build.query<
      SPOTIFYRECENT.GetRecentRes,
      SPOTIFYRECENT.GetRecentReq
    >({
      query: ({ limit, after, before }) => ({
        url: '/me/player/recently-played',
        method: 'GET',
        params: {
          limit: limit,
          after: after,
          before: before,
        },
      }),
      providesTags: ['music'],
    }),
  }),
});

export const { useGetRecentQuery } = api;
