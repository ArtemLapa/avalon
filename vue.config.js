const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  assetsDir: 'assets',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/sass/vuetify/variables.sass"`
      }
    }
  },
})
