/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,tsx,jsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {   
    },
    fontFamily:{
      Kanit:['Kanit']
    },
  },
  _plugins: [require('tailwind-scrollbar')],
  get plugins() {
    return this._plugins;
  },
  set plugins(value) {
    this._plugins = value;
    
  },
}
