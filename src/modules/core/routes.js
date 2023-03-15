const homeRoute = require('../home/Router');

function router(app) {
  app.use('/', homeRoute)
}

module.exports = {router};