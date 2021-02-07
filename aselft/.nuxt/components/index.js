export { default as Logo } from '../../components/Logo.vue'
export { default as Footer } from '../../components/footer.vue'
export { default as Header } from '../../components/header.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
