module.exports = function badRequest(data) {
  return function (req, res) {
    res.status(400);
    if (req.is('json')) {
      res.json(data);
    } else {
      res.render('400', data);
    }
  };
};
