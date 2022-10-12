// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        '@/assets/scss/main.scss'
    ],

    // SEO
    head: {
        title: "YassLeDev website",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ], 
    },
    typescript: {
        shim: false
    },
    target: 'static',
    ssr: false,
    router: {
        base: '/portfolio/',
    }
})
