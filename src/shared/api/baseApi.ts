import { IMovieItem } from '@/types/app'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://yts.mx/api/v2'}),
  endpoints: (builder) => ({
    fetchMovieList: builder.query<IMovieItem[], string>({
        query: (genre: string) => ({
            url: `/list_movies.json?sort_by=year&genre=${genre}`,
            params: {
                _genre: genre
            }
        })
    }),
    getMovieById: builder.query<IMovieItem, number>({
        query: (idMovie: number) => ({
            url: `/movie_details.json?movie_id=${idMovie}`
        })
    }) 
  }),
})

export const {useFetchMovieListQuery, useGetMovieByIdQuery} = baseApi
