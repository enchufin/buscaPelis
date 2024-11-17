import responseMovies from '../moks/result.json'

export default function usePelis () {
  const pelis = responseMovies.Search
  const mappedPelis = pelis?.map(peli => ({
    id: peli.imdbID,
    titulo: peli.Title,
    ano: peli.Year,
    poster: peli.Poster
  }))

  /* Según el video tutorial retorna un objeto con la propiedad pelis que contiene mappedPelis
  { pelis:mappedPelis } */
  return { mappedPelis }
}
