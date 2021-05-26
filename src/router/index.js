import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        // 子路徑可不加 /
        path: 'a',
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue')
      },
      {
        path: 'dynamicrouter/:id',
        component: () => import('../views/DynamicRouter.vue')
      },
      {
        path: 'dynamicrouterbyprops/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log(route)
          return {
            id: route.params.id
          }
        }
      },
      {
        path: 'routerNavigation',
        component: () => import('../views/RouterNavigation.vue')
      },
      {
        path: 'namedview',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'a2b',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue')
            }
          },
          {
            path: 'b2c',
            components: {
              left: () => import('../views/ComponentB.vue'),
              right: () => import('../views/ComponentC.vue')
            }
          }
        ]
      }
    ]
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向
  {
    path: '/newPage/:pathMatch(.*)*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // https://next.router.vuejs.org/zh/api/#routeroptions
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    console.log(to, from, savedPosition)
    // `to` 目前到的頁面路由地址
    // `from`從哪個路由地址過來
    // `savedPosition` 可以為 null
    if (to.fullPath.match('newpage')) {
      return {
        top: 0
      }
    }
  }
})

export default router
