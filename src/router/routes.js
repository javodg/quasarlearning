
const routes = [
  {
    path: '/',
    component: () => import('layouts/principal.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/p', component: () => import('pages/prueba.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
