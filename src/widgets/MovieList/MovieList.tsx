import { useFetchMovieListQuery } from "@/shared/api/baseApi";


const MovieList = () => {
    const { data: movieList } = useFetchMovieListQuery('Animation')
    console.log(movieList)

    return (
        <div>
            главная
        </div>
    );
};

export default MovieList;