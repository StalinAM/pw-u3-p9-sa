<template>
  <div class="opciones-container">
    <ul>
      <li
        @click="pasarPadre(pokemon.id)"
        v-for="pokemon in listaPokemons"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nombresPokemones: []
    }
  },
  methods: {
    pasarPadre(id) {
      this.$emit('seleccionado', id) //Enviar al padre
    }
  },

  props: {
    listaPokemons: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
ul {
  list-style-type: none;
  display: flex;
  gap: 10px;
}
li {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  border: 1px solid;
  transition: transform 0.2s;
}
li:hover {
  transform: scale(1.1);
}
li:active {
  transform: scale(0.95);
}
</style>
