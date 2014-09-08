module.exports = function forbidden(data) {
  return function (req, res) {
    if (req.is('json')) {
      res.json(data);
    } else {
      res.render('403', data);
    }
  };
};
