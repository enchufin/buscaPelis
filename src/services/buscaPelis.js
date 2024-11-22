export const buscaPelis = async ({ query }) => {
  if (query === '') {
    return null
  }

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${query}`)
    const json = await response.json()
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
