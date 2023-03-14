const parserBody = require('body-parser');

function bodyPrs(app) {
// parse application/x-www-form-urlencoded
app.use(parserBody.urlencoded({ extended: false }))

// parse application/json
app.use(parserBody.json())
}

module.exports = bodyPrs;