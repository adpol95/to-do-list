//const homeRoute = require('../home/homePage');
const express = require("express");
function router(app) {
  app.use(express.static(__dirname));
  app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + 'index.html');
  });
  // app.use('/', homeRoute)
}

module.exports = { router };