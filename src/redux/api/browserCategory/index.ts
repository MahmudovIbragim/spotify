import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetBrowseCategory: build.query<
      BROWSECATEGORY.GetBrowseCategoryRes,
      BROWSECATEGORY.GetBrowseCategoryReq
    >({
      query: () => ({
        url: '/browse/categories',
        method: 'GET',
        params: {
          locale: 'ru_RU',
          limit: 50,
          offset: 0,
        },
      }),
      providesTags: ['music'],
    }),
    useGetItemBrowseCategory: build.query<
      BROWSECATEGORY.GetItemBrowseCategoryRes,
      BROWSECATEGORY.GetItemBrowseCategoryReq
    >({
      query: ({ category_id }) => ({
        url: `/browse/categories/${category_id}`,
        method: 'GET',
        params: {
          locale: 'ru_RU',
        },
      }),
      providesTags: ['music'],
    }),
  }),
});

export const { useGetBrowseCategoryQuery, useUseGetItemBrowseCategoryQuery } =
  api;
