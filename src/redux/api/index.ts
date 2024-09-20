import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_PUBLIC_SPOTIFY,
  prepareHeaders: headers => {
    const token = localStorage.getItem('token');
    console.log(token);

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  },
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryExtended,
  refetchOnReconnect: true,
  refetchOnFocus: false,
  tagTypes: ['music'],
  endpoints: () => ({}),
});
