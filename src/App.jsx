import './App.css'
import './water.css'
import { useState, useEffect, useRef } from 'react'
import Pelis from './components/Pelis.jsx'
import usePelis from './hooks/usePelis.js'

function useSearch () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }
    if (query === '') {
      setError('no se puede realizar una búsqueda vacía')
    } else if (/^\d+$/.test(query)) {
      setError('no se puede realizar una búsqueda con números')
    } else if (query.length < 3) {
      setError('la búsqueda debe tener al menos 3 caracteres')
    } else {
      setError(null)
      console.log(query)
    }
  }, [query])
  return { query, setQuery, error, isFirstInput: isFirstInput.current }
}

function App () {
  /* const apiKey = import.meta.env.VITE_API_KEY
  // const baseUrl = import.meta.env.VITE_BASE_API_URL
  console.log(apiKey) */

  const { query, setQuery, error, isFirstInput } = useSearch()
  const { mappedPelis, getPelis } = usePelis({ query })
  const handleSubmit = (e) => {
    e.preventDefault()
    /* const campo = Object.fromEntries(new window.FormData(e.target)) */
    getPelis()
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  return (

    <div className='container'>
      <header>
        <h1>Buscador de películas </h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            className={`myInput ${isFirstInput ? '' : error ? 'errorInput' : 'okInput'}`}
            onChange={handleChange}
            value={query}
            name='query'
            type='text'
            placeholder='Avengers, Stars Wars'
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p className='rojo'>{error}</p>}
      </header>
      <main>
        <Pelis pelis={mappedPelis} />
      </main>
    </div>
  )
}

export default App
