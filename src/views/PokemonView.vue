<template>
  <div class="container">
    <PokemonImagen v-if="destruir" :pokemonId="pokemonGanador" />
    <PokemonOpciones
      @seleccionado="evaluarGanador($event)"
      :listaPokemons="pokemonArr"
    />
    <p v-if="mensaje">{{ mensaje }}</p>
    <button @click="destruirComponente">Destruir</button>
  </div>
</template>
<script>
import PokemonImagen from '@/components/PokemonImagen.vue'
import PokemonOpciones from '@/components/PokemonOpciones.vue'
import {
  obtenerVectorPokemonesFacade,
  obtenerAleatorioFacade
} from '@/clients/PokemonClient.js'
export default {
  components: {
    PokemonImagen,
    PokemonOpciones
  },
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mensaje: null,
      destruir: true
    }
  },
  // Crea el componente
  beforeCreate() {
    console.log('beforeCreate: apenas inicia la instancia del componente')
  },
  created() {
    console.log('created: ya se resolvieron data, computed, methods, watch')
  },
  // Monta el componente en el DOM: renderiza o visualiza el componente
  beforeMount() {
    console.log(
      'beforeMount: justo antes del primer render de un elemento HTML'
    )
  },
  mounted() {
    console.log('mounted: el componente ya se renderizó en el DOM')
    this.iniciarJuego()
  },
  // Actualizacion de un componente
  beforeUpdate() {
    console.log(
      'beforeUpdate: cuando cambió data/props y Vue está por re-renderizar'
    )
  },
  updated() {
    console.log('updated: cuando ya se actualizó tras el re-renderización')
  },

  methods: {
    async iniciarJuego() {
      this.pokemonArr = await obtenerVectorPokemonesFacade()
      const idAleatorio = obtenerAleatorioFacade(0, 3)
      this.pokemonGanador = this.pokemonArr[idAleatorio].id

      this.mensaje = null
    },
    evaluarGanador(idSeleccionado) {
      if (idSeleccionado !== this.pokemonGanador) {
        this.mensaje = '¡Has perdido! Inténtalo de nuevo.'
      } else {
        this.mensaje = '¡Has ganado! ¡Felicidades!'
      }
      setTimeout(() => {
        this.iniciarJuego()
      }, 2000)
    },
    destruirComponente() {
      this.destruir = false // Método para destruir el componente
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
p {
  font-size: 24px;
  font-weight: bold;
  border: 1px solid red;
  padding: 8px 16px;
  border-radius: 8px;
}
</style>
