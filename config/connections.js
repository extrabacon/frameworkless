// Database connections

module.exports = {

  // The default MongoDB connection
  // see: http://mongoosejs.com/docs/connections.html
  default: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/myapp',
    options: {},
    debug: true
  }

};
