module.exports = function notFound(data) {
  return function (req, res) {
    res.status(404);
    if (req.is('json')) {
      res.json(data);
    } else {
      res.render('404', data);
    }
  };
};
