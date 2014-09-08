module.exports = function renderView(view, data) {
  return function (req, res) {
    res.render(view, data);
  };
};
