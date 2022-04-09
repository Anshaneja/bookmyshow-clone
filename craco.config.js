// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          
        ],
      },
    },
    // resolve: {
    //   alias: {
    //     Components: path.resolve(__dirname, 'src/components/')
    //   }
    // }
  }