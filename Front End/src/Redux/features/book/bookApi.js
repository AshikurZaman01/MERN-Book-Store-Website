import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseURL from './getBaseURL';

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/books`,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery,
    tagTypes: ['books'],
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => '/getAll-books',
            providesTags: ['books'],
        }),
    }),
});

export const { useFetchAllBooksQuery } = bookApi;
export default bookApi;
