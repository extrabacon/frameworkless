// HTTP server options

module.exports = {

  // The host name serving the application
  host: 'localhost:3000',

  // The default view engine set for the Express application
  defaultViewEngine: 'jade',

  // HTTP compression flag
  compress: true

  // Cross-Origin Resource Sharing (CORS)
  // see: https://github.com/troygoode/node-cors/#configuration-options
  // cors: {
  //   origin: '*',
  //   credentials: true,
  //   methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
  //   headers: 'content-type'
  // }

};
