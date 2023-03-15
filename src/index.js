const express = require('express');
const app = express();
const bodyPrs = require('./modules/core/bodyParser');
//const loggerM = require('./modules/core/logger');
const errorHandler = require('./modules/core/errorHandler');
const cors = require('./modules/core/cors');
const { router } = require('./modules/core/routes');
const db = require('./modules/core/db');
const { dirAdaptive } = require('./modules/core/dirAdaptive')

const PORT = 5000;

cors(app);
db();
bodyPrs(app);
router(app);
dirAdaptive(app);
errorHandler(app);
//loggerM(app);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})