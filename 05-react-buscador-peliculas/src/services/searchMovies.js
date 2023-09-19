const API_KEY = 'eda9db5a'

const searchMovies = async ({search}) => {
    if(search === '') return null

    try{
        const data = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await data.json()

        const movies = json.Search
        
        return movies?.map(movie => ({
            title: movie.Title,
            year: movie.Year,
            id: movie.imdbID,
            poster: movie.Poster
        }))
    } catch (error) {
        throw new Error('Error searching movies')
    }
}
 
export default searchMovies;