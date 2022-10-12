// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        '@/assets/scss/main.scss'
    ],
    app: {
        head: {
            title: "YassLeDev Portfolio",
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                {
                    name: 'description',
                    content: 'YassLeDev Portfolio'
                }
            ], 
        },
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
