import responseMovies from '../mock/movie-response.json'

const useMovies = () => {
    const movies = responseMovies.Search
    const mappedMovies = movies.map(movie => ({
        title: movie.Title,
        date: movie.Year,
        id: movie.imdbID,
        poster: movie.Poster
    }))

    return { mappedMovies }
}
 
export default useMovies;