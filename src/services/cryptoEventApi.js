import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoEventHeaders = {
    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
    'x-rapidapi-key': <Use your API key>
}

const baseUrl = 'https://coingecko.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoEventHeaders })

export const cryptoEventApi = createApi({
    reducerPath: 'cryptoEventApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => createRequest(`/events`),
        }),
        getUpdates: builder.query({
            query: () => createRequest(`/status_updates`),
        })  
    })

});

export const {
    useGetEventsQuery,
    useGetUpdatesQuery,
} = cryptoEventApi;
