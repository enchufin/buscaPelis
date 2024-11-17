import PropTypes from 'prop-types'
/* Definicion de Typos para que el ESLint deje de quejarse,
especificando que es un array de objetos con una estructura/forma específica */
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
          <img src={peli.poster} alt={`Poster de la película ${peli.Title}`} />
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
