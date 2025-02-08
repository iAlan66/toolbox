import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/components/Home.vue';
import Base64 from '@/components/Base64.vue'
import QRCode from '@/components/QRCode.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/base64', component: Base64 },
  { path: '/qrcode', component: QRCode },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;