import { createMemoryHistory, createRouter } from 'vue-router'

import Base64 from '@/components/Base64.vue'
import Home from '@/components/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/base64', component: Base64 },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;