export interface IMovieItem {
    id: number;
    title: string;
    year: number;
    rating: number;
    runtime: number;
    genres: string[];
    summary: string;
    description_full: string;
    synopsis: string;
    background_image: string;
    background_image_original: string;
    small_cover_image: string;
    medium_cover_image: string;
    large_cover_image: string;
}