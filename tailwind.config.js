/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#0a192f',
                'secondary': '#d4af37',
            },
            fontFamily: {
                'main': ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
