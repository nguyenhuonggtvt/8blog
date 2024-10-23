// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    devServer: {
        host: '0.0.0.0',
        port: 3000
    },
    css: [
        '@/assets/css/tailwind.css',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@pinia/nuxt',
    ],
    plugins: [
        '~/plugins/fontawesome.ts',
    ],
    build: {
        transpile: ['@fortawesome/vue-fontawesome'],
    }
})
