<template>
  <img
    v-if="!imagen"
    src="https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif"
    alt=""
  />
  <img v-if="imagen" :src="imagen" alt="" />
  <div class="pregunta-container">
    <h1>Pregunta</h1>
    <input v-model="pregunta" type="text" placeholder="Haz una pregunta" />
    <p>Recuerda terminar con el signo de interrogación (?)</p>
    <h2>{{ pregunta }}</h2>
    <h1 v-if="!respuesta">Yes, NO</h1>
    <p class="respuesta" v-if="respuesta">{{ respuesta }}</p>
  </div>
</template>

<script>
import { consumirAPIFacade } from '@/clients/YesNoClient'
export default {
  data() {
    return { imagen: null, respuesta: null, pregunta: null }
  },
  watch: {
    pregunta(value, oldValue) {
      if (!value.includes('?')) return
      this.consumir()
    }
  },
  methods: {
    async consumir() {
      const resp = await consumirAPIFacade()
      console.log(resp)
      this.respuesta = resp.answer
      this.imagen = resp.image
    }
  }
}
</script>

<style scoped>
img {
  position: fixed;
  width: 100%;
  height: 100dvh;
  top: 0;
  left: 0;
  z-index: -1;
}
.pregunta-container {
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 18px;
}
input {
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  border-radius: 14px;
  width: 300px;
}
input:focus {
  outline: none;
}
.respuesta {
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
