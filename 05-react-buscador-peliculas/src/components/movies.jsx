/* eslint-disable react/prop-types */
const ListOfMovies = ({ movies }) => {
    return ( 
        <ul className='movies'>
          {movies.map(({id, title, year, poster}) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>{year}</p>
              <img src={poster} alt={title} />
            </li>
          ))}
        </ul>
     );
}

const NoMoviesResults = () => {
    return (
        <p>No se encontraron peliculas para esta busqueda</p>
    )
}

export const Movies = ({ movies }) => {
    const hasMovies = movies?.length > 0

    return (
        hasMovies ? <ListOfMovies movies={movies}/> : <NoMoviesResults/>
    )
}
