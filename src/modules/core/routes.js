const homeRoute = require('../home/Router');
const taskRoute = require('../task/Router');

function router(app) {
  app.use('/', homeRoute)
  app.use('/task', taskRoute)
}

module.exports = {router};