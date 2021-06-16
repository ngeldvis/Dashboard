import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f4c6486 = () => interopDefault(import('..\\pages\\finance.vue' /* webpackChunkName: "pages/finance" */))
const _07230c26 = () => interopDefault(import('..\\pages\\personal.vue' /* webpackChunkName: "pages/personal" */))
const _d2d1933e = () => interopDefault(import('..\\pages\\school.vue' /* webpackChunkName: "pages/school" */))
const _0ea70175 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/finance",
    component: _1f4c6486,
    name: "finance"
  }, {
    path: "/personal",
    component: _07230c26,
    name: "personal"
  }, {
    path: "/school",
    component: _d2d1933e,
    name: "school"
  }, {
    path: "/",
    component: _0ea70175,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
