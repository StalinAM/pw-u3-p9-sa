<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/hola">Hola Mundo</RouterLink> |
      <RouterLink to="/pregunta">Pregunta</RouterLink> |
      <RouterLink to="/pokemon">Pokemon</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  position: relative;
}
nav {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  position: relative;
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
</style>
