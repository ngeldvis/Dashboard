import { wrapFunctional } from './utils'

export { default as AppHeader } from '../..\\components\\AppHeader.vue'

export const LazyAppHeader = import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => wrapFunctional(c.default || c))
