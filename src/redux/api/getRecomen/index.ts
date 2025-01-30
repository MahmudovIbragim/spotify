/* eslint-disable @typescript-eslint/no-explicit-any */
import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetReccomendations: build.query<
      SPOTIFY.GetReccomendationRes,
      SPOTIFY.GetReccomendationReq
    >({
      query: ({ limit, offset }) => ({
        url: '/browse/new-releases',
        method: 'GET',
        params: {
          limit,
          offset,
        },
      }),
      providesTags: ['music'],
    }),
  }),
});

export const { useGetReccomendationsQuery } = api;
