/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                OuterSpace:"#404e4d", 
                Wenge :"#63595c", 
                PaynesGray:"#646881", 
                Verdigris:"#62bec1", 
                VividSkyBlue:"#5ad2f4",
                text: '#ecf0f1',
                background: '#FBFBF8',
                primary: '#bab04c',
                secondary: '#9fdad4',
                accent: '#7397c9',
            },

            fontSize: {
                base: '1.25rem', // Sets the base font size to `text-xl`
            },
        },
    },
    plugins: [],
}
