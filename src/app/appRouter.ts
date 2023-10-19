import MovieList from '@/widgets/MovieList/MovieList';


export interface IRoute {
    path: string,
    element: React.ComponentType,
    exact?: boolean
}

export enum RouterNames {
    MAIN_PAGE = '/React_kinopoisk',
    //MOVIE_ID = '/React_kinopoisk/:id'
}

export const routes: IRoute[] = [
    {path: RouterNames.MAIN_PAGE, exact: true, element: MovieList},
    //{path: RouterNames.MOVIE_ID, exact: true, element: PostDescription}
]