import PropTypes from 'prop-types'

ListadoPelis.propTypes = {
  pelis: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      ano: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired
    })
  ).isRequired
}

export function ListadoPelis ({ pelis }) {
  return (
    <ul className='pelis'>
      {pelis.map(peli => (
        <li className='peli' key={peli.id}>
          <h3>{peli.titulo}</h3>
          <p>{peli.ano}</p>
          <img src={peli.poster} alt={`Poster de la película ${peli.titulo}`} />
        </li>
      ))}
    </ul>
  )
}

export function NoPelis () {
  return (
    <p>No se ha encontrado ninguna peli</p>
  )
}

Pelis.propTypes = {
  pelisQuery: PropTypes.shape({
    respuestaPeli: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        ano: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}

export default function Pelis ({ pelisQuery }) {
  const pelis = Array.isArray(pelisQuery.respuestaPeli) ? pelisQuery.respuestaPeli : []
  const hasPelis = pelis.length > 0
  return (
    hasPelis
      ? <ListadoPelis pelis={pelis} />
      : <NoPelis />
  )
}
