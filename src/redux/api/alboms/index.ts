import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: build => ({
    GetAlbomById: build.query<ALBOM.GetAlbomByIdRes, ALBOM.GetAlbomByIdRec>({
      query: id => ({
        url: `/albums/${id.id}`,
        method: 'GET',
        params: {
          market: 'KG',
        },
      }),
      providesTags: ['music'],
    }),
  }),
});

export const { useGetAlbomByIdQuery } = api;
