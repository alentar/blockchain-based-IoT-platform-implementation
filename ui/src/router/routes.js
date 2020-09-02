const routes = [{
  path: '/',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    path: '/',
    component: () => import('pages/Index.vue')
  },
  {
    path: 'addbatch',
    component: () => import('pages/AddBatch.vue')
  },
  {
    path: 'viewbatch',
    component: () => import('pages/ViewBatch.vue')
  },
  {
    path: 'transportbatch',
    component: () => import('pages/TransportBatch.vue')
  },
  {
    path: 'acceptbatch',
    component: () => import('pages/AcceptBatch.vue')
  },
  {
    path: 'deliverbatch',
    component: () => import('pages/DeliverBatch.vue')
  }
  ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
