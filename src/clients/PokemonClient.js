import axios from 'axios'

const consumirAPI = async (pokemonId) => {
  const respuesta = axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.data)
  return respuesta
}

function obtenerAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const obtenerVectorNumerico = () => {
  const numeros = []
  for (let i = 0; i < 4; i++) {
    numeros.push(obtenerAleatorio(1, 600))
  }
  return numeros
}

const obtenerVectorPokemones = async () => {
  const vectorNumerico = obtenerVectorNumerico()
  const vectorPokemones = []
  for (let i = 0; i < vectorNumerico.length; i++) {
    const pokemon = await consumirAPI(vectorNumerico[i])
    vectorPokemones.push({ id: vectorNumerico[i], nombre: pokemon.name })
  }
  return vectorPokemones
}

export async function obtenerVectorPokemonesFacade() {
  return await obtenerVectorPokemones()
}

export function obtenerAleatorioFacade(min, max) {
  return obtenerAleatorio(min, max)
}
