const express = require('express');
const dirFront = __dirname.replace(/core/, '/home/front');

function dirAdaptive(app) {
  app.use(express.static(dirFront));
}

module.exports = {dirAdaptive, dirFront};