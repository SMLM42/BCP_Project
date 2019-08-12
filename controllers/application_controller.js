let etcObj = require("./etcFormat.js");
let simplifiedObj = require("./simplifiedFormat.js");

const controllerObj = {
    validate: (req, res) => {
        // simplifiedObj.validate(req.body.initialString, res);
        etcObj.validate(req.body.initialString, res);
    }
}

module.exports = controllerObj;





