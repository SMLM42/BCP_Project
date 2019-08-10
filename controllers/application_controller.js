var detachmentNum = 0
let etcObj = require("./etcFormat.js");
let simplifiedObj = require("./simplifiedFormat.js");

const controllerObj = {
    validate: (req, res) => {
        simplifiedObj.validate(req.body.initialString, res);
        // simplifiedObj.validate(req.body.initialString, res);

        // // This function will check that the types of detachments are legal, and that their cp values are correct. The array returned by the ++ split is an odd length with the odd numbers being Detachment headers and the even being the actual body of the list
        //   for (var i = 1; i < armyList.length; (i = (i + 2))) {
        //       var detachmentTest = (armyList[i]).trim()
        //       console.log(detachmentTest)
        //       var detachmentType = detachmentTest.split(" ")
        //       // detachmentType = detachmentType[0]
        //       if (detachmentType[0] == "Supreme" || detachmentType[0] == "Air" || detachmentType[0] == "Fortification" || detachmentType[0] == "Auxiliary" || (detachmentType[0] == "Super-Heavy" && detachmentType[1] == "Auxiliary")) {
        //           detachmentType = (detachmentType[0] + " " + detachmentType[1])
        //       }
        //       else {
        //           detachmentType = detachmentType[0]
        //       }
        //       console.log(detachmentType)
        //       var typeTest = Object.keys(detachmentTemplates)
        //       if (typeTest.includes(detachmentType)) {
        //           console.log("Detachment " + detachmentNum + " Valid Type")
        //       }
        //       else {
        //           console.log("Detachment " + detachmentNum + " Invalid Type")
        //       }

        //       // This will test if the cp value is correct
        //       var cpTest = detachmentTest.trim().split("CP")
        //       cpTest = (cpTest[0].substring((cpTest[0].length - 3), (cpTest[0].length))).trim()
        //       cpTest = cpTest.replace("+", "")
        //       console.log(cpTest)
        //       // This part not done
        //       if (cpTest == detachmentTemplates[detachmentType].CP) {
        //           console.log("Detachment " + detachmentNum + " Correct CP")
        //       }
        //       else {
        //           console.log("Detachment " + detachmentNum + " Incorrect CP")
        //       }
        //       detachmentNum++
        //   }
    }
}

module.exports = controllerObj;





