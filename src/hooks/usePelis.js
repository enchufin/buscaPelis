import { useState } from 'react'
/* import withResults from '../moks/result.json' */
import withoutResults from '../moks/no-results.json'

// Este hook es el encargado de mapear la respuesta de la API a un objeto con las propiedades que necesitamos

export default function usePelis ({ query }) {
  const [respuestaPeli, setRespuestaPeli] = useState([])

  const pelis = respuestaPeli.Search
  const mappedPelis = pelis?.map(peli => ({
    id: peli.imdbID,
    titulo: peli.Title,
    ano: peli.Year,
    poster: peli.Poster
  }))

  const getPelis = async () => {
    if (query) {
      // setRespuestaPeli(withResults)
      fetch(`https://www.omdbapi.com/?apikey=4a3b711b&s=${query}`)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          setRespuestaPeli(json)
        })
    } else {
      setRespuestaPeli(withoutResults)
    }
  }

  /* Según el video tutorial retorna un objeto con la propiedad pelis que contiene mappedPelis
  { pelis:mappedPelis } */
  return { mappedPelis, getPelis }
}
