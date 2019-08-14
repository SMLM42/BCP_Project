let etcObj = require("./etcFormat.js");
let simplifiedObj = require("./simplifiedFormat.js");

const controllerObj = {
    validate: (req, res) => {
        let string = req.body.initialString

        string = string.split(" ")
        // console.log("Start" + string[0] + "End")
        if (string[0].includes("++++++")) {
            console.log("ETC FORMAT")
            etcObj.validate(req.body.initialString, res);
        }
        else {
            console.log("SIMPLIFIED FORMAT")
            simplifiedObj.validate(req.body.initialString, res);
        }



    }
}

module.exports = controllerObj;





