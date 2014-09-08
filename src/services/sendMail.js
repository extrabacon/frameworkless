var nodemailer = require('nodemailer');
var juice = require('juice');
var config = require('../config');

var transport = nodemailer.createTransport(config.email.transport);

module.exports = function (message, callback) {
  if (!message.from) {
    message.from = config.email.from;
  }
  if (message.html) {
    var options = { url: 'http://' + config.http.host + '/' };
    juice.juiceContent(message.html, options, function (err, inlined) {
      if (err) return callback(err);
      message.html = inlined;
      transport.sendMail(message, callback);
    });
  } else {
    transport.sendMail(message, callback);
  }
};
