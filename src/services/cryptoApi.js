import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
<<<<<<< HEAD
    'x-rapidapi-key': '4298a992c6msh3e488c4db704993p10881ejsnb2b235a0dbf2'
=======
    'x-rapidapi-key': <Use your API key>
>>>>>>> dd3dd1e0e6d60541178469eada8246423cee9ec5
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders })


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
<<<<<<< HEAD
} = cryptoApi;
=======
    useGetExchangesQuery
} = cryptoApi;
>>>>>>> dd3dd1e0e6d60541178469eada8246423cee9ec5
