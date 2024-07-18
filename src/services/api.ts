import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardapioItem } from '../pages/Categories'

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
    }),
    endpoints: (builder) => ({
        getFeatureGame: builder.query<CardapioItem[], void>({
            query: () => ''
        })
    })
})

 export const { useGetFeatureGameQuery } = api;

export default api;