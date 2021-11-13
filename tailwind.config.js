module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        "header": "url('/src/assests/images/mobile/image-header.jpg')",
        "cherry": "url('/src/assests/images/mobile/image-graphic-design.jpg')",
        "orange": "url('/src/assests/images/mobile/image-photography.jpg')",
        "desktop-header": "url('/src/assests/images/desktop/dsk-image-header.jpg')"
      }
    },
  },
  variants: {
    extend: {
      padding: ['hover']
    },
  },
  plugins: [],
}
