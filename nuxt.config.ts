// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        '@/assets/scss/main.scss'
    ],
    typescript: {
        shim: false
    },
    target: 'static',
    ssr: false,
    router: {
        base: '/portfolio/'
    }
})
