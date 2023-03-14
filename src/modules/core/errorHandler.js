function wrongApi(req, res) {
  res.status(400).json('API not found');
}


module.exports = function(app) {
  app.use(wrongApi);
}
