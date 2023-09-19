import { useEffect, useState, useRef, useCallback } from 'react'
import './app.css'
import useMovies from './hooks/useMovies'
import { Movies } from './components/movies'
import debounce from 'just-debounce-it'

const useSearch = () => {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  
  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if(search === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    setError(null)
  }, [search])

  return {search, updateSearch, error}
}


function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  /*
    //Obtener todos los campos de un formulario de manera nativa en JS
    const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)
    //const query = fields.get('query')
    //if(query === '') return setError('no se ingreso ninguna pelicula')
  }*/

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  ) 

  const handleChange = (event) => {
    const newSearch = event.target.value //El estado de react es asincrono
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }


  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
          <form onSubmit={handleSubmit} className="form">
            <input onChange={handleChange} value={search} name='search' type="text" placeholder="Avengers, 1914, The Witcher..." />
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button type='submit'>Buscar</button>
          </form>
          {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies}/>
}
      </main> 
    </div>
  )
}

export default App
