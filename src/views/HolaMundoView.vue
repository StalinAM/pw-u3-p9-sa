<template>
  <div class="container">
    <h1>Hola Mundo</h1>
    <p>
      Consultando los datos del estudiante: <span>{{ idEstudiante }}</span>
    </p>
    <button @click="consultarDatos">Mostrar id param</button>
    <p>{{}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      idEstudiante: null
    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    consultarDatos() {
      this.idEstudiante = this.$route.params.id
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
button {
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
span {
  color: #4caf50;
  font-weight: bold;
  font-size: 18px;
}
</style>
