import PropTypes from 'prop-types'

/* Definicion de Typos para que el ESLint deje de quejarse,
especificando que es un array de objetos con una estructura/forma específica */
ListadoPelis.propTypes = {
  pelis: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired
    })
  ).isRequired
}
export function ListadoPelis ({ pelis }) {
  return (
    <ul>
      {pelis.map(peli => (
        <li key={peli.imdbID}>
          <h3>{peli.Title}</h3>
          <p>{peli.Year}</p>
          <img src={peli.Poster} alt={`Poster de la película ${peli.Title}`} />
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

/* Definicion de Typos para que el ESLint deje de quejarse  */
Pelis.propTypes = {
  pelis: PropTypes.array.isRequired
}

// gestionamos la lógica de gestión respuesta
export default function Pelis ({ pelis }) {
  const hasPelis = pelis?.length > 0

  return (
    hasPelis
      ? <ListadoPelis pelis={pelis} />
      : <NoPelis />
  )
}
