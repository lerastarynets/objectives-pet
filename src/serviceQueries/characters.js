import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constants/common';

export const charactersApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    reducerPath: 'charactersApi',
    endpoints: (builder) => ({
        getCharacters: builder.query({
            query: ({ pageNumber }) => {
                const params = `?page=${pageNumber}`;
                return { url: `/character/${params}`, method: 'GET' };
            },
        }),
    }),
});

export const { useGetCharactersQuery } = charactersApi;
