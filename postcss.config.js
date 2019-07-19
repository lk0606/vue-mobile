module.exports = {
  plugins: {
    // @import 生效
    'postcss-import': {},
    'postcss-apply': {},
    autoprefixer: {},
    'postcss-pxtorem': {
      // rootValue: window.innerWidth <= 320 ? 20 : document.body.offsetWidth * 40 / 750,
      rootValue: 40,
      propList: ['*'],
      selectorBlackList: ['bx', 'mint'],
    }

  }
}
