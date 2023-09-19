import { useState, useRef, useMemo, useCallback } from 'react'
import searchMovies from '../services/searchMovies'

const useMovies = ({ search, sort }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    //useCallback utiliza useMemo por debajo y se utiliza especificamente para retornar funciones
    const getMovies = useCallback(async ({ search }) => {
        if (previousSearch.current === search) return

        try{
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch(e){
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [])

    const sortedMovies = useMemo(() => {
        return sort 
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
        : movies
    }, [movies, sort]) 

    return { movies: sortedMovies, loading, error, getMovies }
}
 
export default useMovies;