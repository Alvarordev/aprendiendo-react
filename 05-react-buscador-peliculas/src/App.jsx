import { useEffect, useState } from 'react'
import './app.css'
import useMovies from './hooks/useMovies'

const useSearch = () => {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState('')
  
  useEffect(() => {
    if(search === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    setError(null)
  }, [search])

  return {search, updateSearch, error}
}


function App() {
  const { mappedMovies } = useMovies()
  const { search, updateSearch, error } = useSearch()
  /*
    //Obtener todos los campos de un formulario de manera nativa en JS
    const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)
    //const query = fields.get('query')
    //if(query === '') return setError('no se ingreso ninguna pelicula')
  }*/

  const handleChange = (event) => {
    const newQuery = event.target.value //El estado de react es asincrono
    updateSearch(newQuery)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({search})
  }


  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
          <form onSubmit={handleSubmit} className="form">
            <input onChange={handleChange} value={search} name='search' type="text" placeholder="Avengers, 1914, The Witcher..." />
            <button type='submit'>Buscar</button>
          </form>
          {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        <ul className='movies'>
          {mappedMovies ? mappedMovies.map(({id, title, year ,poster}) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>{year}</p>
              <img src={poster} alt={title} />
            </li>
          )) : <h2>No se encontraron resultados para esta busqueda</h2>}
        </ul>
      </main> 
    </div>
  )
}

export default App
