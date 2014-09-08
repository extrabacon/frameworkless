// Assets configuration

module.exports = {

  // the location where processed assets are stored
  path: '.tmp/public',

  // options for the serve-static middleware
  // see: https://github.com/expressjs/serve-static
  options: {
    dotfiles: 'ignore',
    etag: true,
    maxAge: '30d'
  }
};
