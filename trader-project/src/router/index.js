import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/Home.vue"
import Portifolio from '@/views/Portifolio/Portifolio.vue'
import Stocks from '@/views/Stocks/Stocks.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/portifolio', component: Portifolio },
  { path: '/stocks', component: Stocks },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
