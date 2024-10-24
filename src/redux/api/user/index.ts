import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetCurrentUserProfile: build.query<
      PROFILE.GetCurrentProfileRes,
      PROFILE.GetCurrentProfileRec
    >({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
      providesTags: ['music'],
    }),
    GetUserTopItems: build.query({
      query: ({ type, offset }) => ({
        url: `/me/top/${type}`,
        method: 'GET',
        params: {
          time_range: 'medium_term',
          limit: 50,
          offset: offset,
        },
      }),
      providesTags: ['music'],
    }),
  }),
});

export const { useGetCurrentUserProfileQuery, useGetUserTopItemsQuery } = api;
