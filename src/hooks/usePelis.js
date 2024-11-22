import { useState } from 'react'
import { buscaPelis } from '../services/buscaPelis.js'

export default function usePelis ({ query }) {
  const [pelisQuery, setPelisQuery] = useState({
    respuestaPeli: [],
    loading: false,
    error: null
  })

  const getPelis = async () => {
    setPelisQuery(prevState => ({
      ...prevState,
      loading: true
    }))
    try {
      const pelis = await buscaPelis({ query })
      setPelisQuery({
        respuestaPeli: pelis || [],
        loading: false,
        error: null
      })
    } catch (error) {
      setPelisQuery({
        respuestaPeli: [],
        loading: false,
        error: error.message
      })
    }
  }

  return { pelisQuery, getPelis }
}
