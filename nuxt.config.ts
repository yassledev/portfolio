// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

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
            {
              hid: 'yassledev',
              name: 'description',
              content: 'my website description'
            }
        ], 
    },
    typescript: {
        shim: false
    },
    target: 'static',
    ssr: false,
    router: {
        base: '/portfolio/',
    },
    vite: {
        plugins: [
            VueI18nVitePlugin({
                include: [
                    resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
                ]
            })
        ]
    }
})
