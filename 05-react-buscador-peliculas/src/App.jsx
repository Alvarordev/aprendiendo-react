import './app.css'
import movies from '../mock/movie-response.json'

function App() {
  const newMovies = movies.Search

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
          <form className="form">
            <input type="text" placeholder="Avengers, 1914, The Witcher..." />
            <button>Buscar</button>
          </form>
      </header>
      <main>
        <ul className='movies'>
          {newMovies ? newMovies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          )) : <h2>No se encontraron resultados para esta busqueda</h2>}
        </ul>
      </main> 
    </div>
  )
}

export default App
