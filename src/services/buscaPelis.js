const apiKey = import.meta.env.VITE_API_KEY
const baseUrl = import.meta.env.VITE_BASE_API_URL

export const buscaPelis = async ({ query }) => {
  if (query === '') {
    return null
  }

  try {
    const response = await fetch(`${baseUrl}${apiKey}&s=${query}`)
    const json = await response.json()
    console.log(json)
    const pelis = json.Search
    return pelis?.map(peli => ({
      id: peli.imdbID,
      titulo: peli.Title,
      ano: peli.Year,
      poster: peli.Poster
    }))
  } catch (error) {
    throw new Error('No se pudo obtener ninguna película')
  }

/*   if (query) {
    // setRespuestaPeli(withResults)
    fetch(`${baseUrl}${apiKey}&s=${query}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setRespuestaPeli(json)
      })
  } else {
    setRespuestaPeli(withoutResults)
  } */
}
