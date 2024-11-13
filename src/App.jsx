import './water.css'
import './App.css'

import Pelis from './components/Pelis.jsx'
import responseMovies from './moks/result.json'
/* import withoutResults from './moks/no-results.json' */

function App () {
  const apiKey = import.meta.env.VITE_API_KEY
  /*  const baseUrl = import.meta.env.VITE_BASE_API_URL */
  console.log(apiKey)
  const pelis = responseMovies.Search

  return (

    <div className='container'>
      <header>
        <h1>Buscador de películas </h1>

        <form action=''>
          <input type='text' placeholder='Avengers, Stars Wars' />
          <button type='submit'> Buscar </button>
        </form>
      </header>
      <main>
        <Pelis pelis={pelis} />
      </main>
    </div>
  )
}

export default App
