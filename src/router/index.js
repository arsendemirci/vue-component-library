import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      path: '/selects',
      name: 'select',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/select/SelectDemo.vue')
    },
    {
      path: '/buttons',
      name: 'button',
      component: () => import('../views/button/ButtonDemo.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('../views/dialog/DialogDemo.vue')
    },
    {
        path: '/breadcrumbs',
        name: 'breadcrumbs',
        component: () => import('../views/breadcrumbs/BreadcrumbsDemo.vue'),
        children: [
          {
            path: '',
            component:  () => import('../views/breadcrumbs/Home.vue'),
            meta: {
              breadcrumb: [
                { name: 'Home' }
              ]
            },
          },
          {
            path: 'children1',
            component:  () => import('../views/breadcrumbs/Children1.vue'),
            meta: {
              breadcrumb: [
                {
                  name: "Home",
                  href: "/breadcrumbs",
                },
                {
                  name: "Children 1",
                },
              ]
            },
          },
          {
            path: 'children1/children2',
            component:  () => import('../views/breadcrumbs/Children2.vue'),
            meta: {
              breadcrumb: [
                {
                  name: "Home",
                  href: "/breadcrumbs",
                },
                {
                  name: "Children 1",
                  href: "/breadcrumbs/children1",
                  
                },
                {
                  name: "Children 2",
                },
              ]
            },
          },
        ],
      }
  ]
})

export default router
