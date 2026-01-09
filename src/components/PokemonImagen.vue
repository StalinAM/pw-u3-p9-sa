<template>
  <picture>
    <img :src="srcImagen" alt="No se puede renderizar la imagen" />
  </picture>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    }
  },
  computed: {
    srcImagen() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  },
  // Desmontaje del componente del DOM
  beforeUnmount() {
    console.log('beforeUnmount: justo antes de que el componente sea destruido')
  },
  unmounted() {
    console.log('unmounted: ya fue removido del DOM y destruido')
  }
}
</script>

<style scoped>
img {
  width: 250px;
  height: 250px;
}
</style>
