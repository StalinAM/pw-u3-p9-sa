import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HolaMundoView from '@/views/HolaMundoView.vue'
import PreguntaView from '@/views/PreguntaView.vue'
import PokemonView from '../views/PokemonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/hola',
      name: 'hola',
      component: HolaMundoView
    },
    {
      path: '/hola',
      name: 'hola',
      component: HolaMundoView
    },
    {
      path: '/pregunta',
      name: 'pregunta',
      component: PreguntaView
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: PokemonView
    }
  ]
})

export default router
