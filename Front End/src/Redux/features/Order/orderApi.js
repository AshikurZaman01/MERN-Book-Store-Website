import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseURL from '../book/getBaseURL';

const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseURL()}/api/orders`,
        credentials: 'include',
    }),
    tagTypes: ['orders'],
    endpoints: (builder) => ({

        createOrder: builder.mutation({
            query: (data) => ({
                url: '/createOrder',
                method: 'POST',
                body: data,
            })
        }),

        getOrdersByEmail: builder.query({
            query: (email) => `/getOrders/${email}`,
            providesTags: ['orders'],
        })

    })
});

export const { useCreateOrderMutation, useGetOrdersByEmailQuery } = orderApi;
export default orderApi;
