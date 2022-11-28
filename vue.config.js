module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-send-mail/' : '/',
  devServer: {
    // 프록시 설정
    proxy: {
      '/mail': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
    },
  },
};
