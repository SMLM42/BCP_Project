const detachmentTemplates = {
    Patrol: {
        CP: 0,
        HQ: { min: 1, max: 2 },
        Troops: { min: 1, max: 3 },
        Elites: { min: 0, max: 2 },
        Fast_Attack: { min: 0, max: 2 },
        Heavy_Support: { min: 0, max: 2 },
        Flyers: { min: 0, max: 2 },
        Lord_of_War: { min: 0, max: 0 },
        Dedicated_Transports: { min: 0, max: "" },
        Fortification: { min: 0, max: 0 }
    },
    Battalion: {
        CP: 5,
        HQ: { min: 2, max: 3 },
        Troops: { min: 3, max: 6 },
        Elites: { min: 0, max: 6 },
        Fast_Attack: { min: 0, max: 3 },
        Heavy_Support: { min: 0, max: 3 },
        Flyers: { min: 0, max: 2 },
        Lord_of_War: { min: 0, max: 0 },
        Dedicated_Transports: { min: 0, max: "" },
        Fortification: { min: 0, max: 0 }
    },
    Brigade: {
        CP: 12,
        HQ: { min: 3, max: 5 },
        Troops: { min: 6, max: 12 },
        Elites: { min: 3, max: 8 },
        Fast_Attack: { min: 3, max: 5 },
        Heavy_Support: { min: 3, max: 5 },
        Flyers: { min: 0, max: 2 },
        Lord_of_War: { min: 0, max: 0 },
        Dedicated_Transports: { min: 0, max: "" },
        Fortification: { min: 0, max: 0 }
    },
    Vanguard: {
        CP: 1,
        HQ: { min: 1, max: 2 },
        Troops: { min: 0, max: 3 },
        Elites: { min: 3, max: 6 },
        Fast_Attack: { min: 0, max: 2 },
        Heavy_Support: { min: 0, max: 2 },
        Flyers: { min: 0, max: 2 },
        Lord_of_War: { min: 0, max: 0 },
        Dedicated_Transports: { min: 0, max: "" },
        Fortification: { min: 0, max: 0 }
    },
    Spearhead: {
        CP: 1,
        HQ: { min: 1, max: 2 },
        Troops: { min: 0, max: 3 },
        Elites: { min: 0, max: 2 },
        Fast_Attack: { min: 0, max: 2 },
        Heavy_Support: { min: 3, max: 6 },
        Flyers: { min: 0, max: 2 },
        Lord_of_War: { min: 0, max: 0 },
        Dedicated_Transports: { min: 0, max: "" },
        Fortification: { min: 0, max: 0 }
    },
    Outrider: {
        CP: 1,
        HQ: { min: 1, max: 2 },
        Troops: { min: 0, max: 3 },
        Elites: { min: 0, max: 2 },
        Fast_Attack: { min: 3, max: 6 },
        Heavy_Support: { min: 0, max: 2 },
        Flyers: { min: 0, max: 2 },
        Lord_of_War: { min: 0, max: 0 },
        Dedicated_Transports: { min: 0, max: "" },
        Fortification: { min: 0, max: 0 }
    },
    "Supreme Command": {
        CP: 1,
        HQ: { min: 3, max: 5 },
        Troops: { min: 0, max: 0 },
        Elites: { min: 0, max: 1 },
        Fast_Attack: { min: 0, max: 2 },
        Heavy_Support: { min: 0, max: 2 },
        Flyers: { min: 0, max: 2 },
        Lord_of_War: { min: 0, max: 1 },
        Dedicated_Transports: { min: 0, max: "" },
        Fortification: { min: 0, max: 0 }
    },
    "Super-Heavy": {
        CP: 3,
        HQ: { min: 0, max: 0 },
        Troops: { min: 0, max: 0 },
        Elites: { min: 0, max: 0 },
        Fast_Attack: { min: 0, max: 0 },
        Heavy_Support: { min: 0, max: 0 },
        Flyers: { min: 0, max: 0 },
        Lord_of_War: { min: 3, max: 5 },
        Dedicated_Transports: { min: 0, max: 0 },
        Fortification: { min: 0, max: 0 }
    },
    "Air Wing": {
        CP: 1,
        HQ: { min: 0, max: 0 },
        Troops: { min: 1, max: 0 },
        Elites: { min: 0, max: 0 },
        Fast_Attack: { min: 0, max: 0 },
        Heavy_Support: { min: 0, max: 0 },
        Flyers: { min: 3, max: 5 },
        Lord_of_War: { min: 0, max: 0 },
        Dedicated_Transports: { min: 0, max: 0 },
        Fortification: { min: 0, max: 0 }
    },
    "Super-Heavy Auxiliary": {
        CP: 0,
        HQ: { min: 0, max: 0 },
        Troops: { min: 0, max: 0 },
        Elites: { min: 0, max: 0 },
        Fast_Attack: { min: 0, max: 0 },
        Heavy_Support: { min: 0, max: 0 },
        Flyers: { min: 0, max: 0 },
        Lord_of_War: { min: 1, max: 1 },
        Dedicated_Transports: { min: 0, max: 0 },
        Fortification: { min: 0, max: 0 }
    },
    "Fortification Network": {
        CP: 0,
        HQ: { min: 1, max: 2 },
        Troops: { min: 1, max: 3 },
        Elites: { min: 0, max: 2 },
        Fast_Attack: { min: 0, max: 2 },
        Heavy_Support: { min: 0, max: 2 },
        Flyers: { min: 0, max: 2 },
        Lord_of_War: { min: 0, max: 0 },
        Dedicated_Transports: { min: 0, max: 0 },
        Fortification: { min: 0, max: 0 }
    },
    "Auxiliary Support": {
        CP: -1,
        HQ: { min: 0, max: 1 },
        Troops: { min: 0, max: 1 },
        Elites: { min: 0, max: 1 },
        Fast_Attack: { min: 0, max: 1 },
        Heavy_Support: { min: 0, max: 1 },
        Flyers: { min: 0, max: 1 },
        Lord_of_War: { min: 0, max: 0 },
        Dedicated_Transports: { min: 0, max: 1 },
        Fortification: { min: 0, max: 0 }
    }
}

var detachmentNum = 0
let etcObj = require("./etcFormat.js");



const controllerObj = {
    validate: (req, res) => {
        etcObj.validate(req.body.initialString, res);

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





