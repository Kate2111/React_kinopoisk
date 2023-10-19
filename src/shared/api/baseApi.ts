import { IMovieItem } from '@/types/PostItem'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ListMoviesResponse {
    data: {
      movies: IMovieItem[];
    };
  };

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://yts.mx/api/v2'}),
  endpoints: (builder) => ({
    fetchMovieList: builder.query<IMovieItem[], string>({
        query: (genre: string) => ({
            url: `/list_movies.json?sort_by=year&genre=${genre}`,
            params: {
                _genre: genre
            },
            
        }),
        transformResponse: (response: ListMoviesResponse) => response.data.movies
    }),
    getMovieById: builder.query<IMovieItem, number>({
        query: (idMovie: number) => ({
            url: `/movie_details.json?movie_id=${idMovie}`
        })
    }) 
  }),
})


export const {useFetchMovieListQuery, useGetMovieByIdQuery} = baseApi
