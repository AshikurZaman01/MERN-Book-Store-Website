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

        fetchSingleBook: builder.query({
            query: (id) => `/get-single-book/${id}`,
            providesTags: (results, id) => [{ type: 'books', id }],
        }),

        addBook: builder.mutation({
            query: (data) => ({
                url: '/create-book',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['books'],
        }),

        updateBook: builder.mutation({
            query: ({ id, ...data }) => (
                {
                    url: `/edit-book/${id}`,
                    method: 'PUT',
                    body: data
                }
            ),
            invalidatesTags: ['books']
        }),

        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/delete-book/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['books'],
        })
    }),
});

export const { useFetchAllBooksQuery, useFetchSingleBookQuery, useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation } = bookApi;
export default bookApi;
