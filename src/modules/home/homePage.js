const {dirFront} = require("../core/dirAdaptive");

function homePage(req, res) {
    res.status(200).sendFile(dirFront + '/index.html');
}

module.exports = homePage;