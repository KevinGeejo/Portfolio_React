/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html", "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  extend: {
      fontFamily: {
        'mono': [ 'Menlo', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'inter': ['Inter' , 'sans-serif']
      }
    },
  plugins: [],
}