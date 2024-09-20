/* eslint-disable @typescript-eslint/no-explicit-any */
import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetReccomendations: build.query<
      SPOTIFY.GetReccomendationRes,
      SPOTIFY.GetReccomendationReq
    >({
      query: ({ seed_artists, seed_genres, seed_tracks, limit, market }) => ({
        url: '/recommendations',
        method: 'GET',
        params: {
          seed_artists,
          seed_genres,
          seed_tracks,
          limit,
          market,
        },
      }),
      providesTags: ['music'],
    }),
    GetTest: build.query<TEST.GetTestRes, void>({
      query: () => ({
        // url: 'me/player/recently-played',
        url: 'tracks/2lLJzWiYlmewGWvI9Dhmwh',
        method: 'GET',
      }),
      providesTags: ['music'],
    }),
  }),
});

export const { useGetReccomendationsQuery, useGetTestQuery } = api;
