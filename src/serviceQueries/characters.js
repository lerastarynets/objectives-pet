import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constants/common';

export const charactersApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    reducerPath: 'charactersApi',
    endpoints: (builder) => ({
        getCharacters: builder.query({
            query: () => ({ url: '/character', method: 'GET' }),
        }),
    }),
});

export const { useGetCharactersQuery } = charactersApi;
