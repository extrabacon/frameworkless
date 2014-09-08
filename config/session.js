// Session configuration

module.exports = {

  // middleware options
  // see: https://github.com/expressjs/session
  secret: 'ee589575f6c1fd6cb8fca521c5987498',
  resave: true,
  rolling: false,
  saveUninitialized: true

  // cookie: {
  //   path: '/',
  //   httpOnly: true,
  //   secure: false,
  //   maxAge: null
  // }

  // session store options (depends on store type)
  // store: {}

};
