import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetSearch: build.query<SEARCH.GetSearchRes, SEARCH.GetSearchReq>({
      query: ({ q, type }) => ({
        url: '/search',
        method: 'GET',
        params: {
          q: q,
          type: type,
          market: 'KG',
          limit: 30,
          offset: 10,
          include_external: 'audio',
        },
      }),
      providesTags: ['music'],
    }),
  }),
});

export const { useGetSearchQuery } = api;
