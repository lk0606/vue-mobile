module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      // rootValue: window.innerWidth <= 320 ? 20 : document.body.offsetWidth * 40 / 750,
      rootValue: 40,
      propList: ['*'],
      selectorBlackList: ['bx', 'mint'],
    }

  }
}
