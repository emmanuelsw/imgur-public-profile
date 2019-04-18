module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/imgur-public-profile/'
    : '/'
}