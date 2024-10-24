/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans_jp: ['Noto Sans JP', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

