import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetSearch: build.query<SEARCH.GetSearchRes, SEARCH.GetSearchReq>({
      query: ({ q, type, offset }) => ({
        url: '/search',
        method: 'GET',
        params: {
          q: q,
          type: type,
          market: 'KG',
          limit: 50,
          offset: offset,
          include_external: 'audio',
        },
      }),
      providesTags: ['music'],
    }),
  }),
});

export const { useGetSearchQuery, useLazyGetSearchQuery } = api;
