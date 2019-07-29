const controllerObj = {
    validate: (req, res) => {

        // Takes in the SIXTH ROW ONLY (ie the actual army list)

        // console.log(detachmentTemplates)
        var faction
        // This is for battlescribe notation with ++, there are multiple variations of this that will need to be accounted for
        var armyList = req.body.initialString.split("\n");

        let string = req.body.initialString.trim().split(/\+{2,}/).filter(Boolean);

        if(string.length < 2) {
            res.end("you are submitting the wrong format");
        } else if (!req.body.initialString.split(/\+{2,}/)[1].includes("+") || !req.body.initialString.split(/\+{2,}/)[1].includes(":")) {
            res.end("you are missing the + or :");
        } else {
            var list = ["REPORTED ARMY FACTION", "TOTAL COMMAND POINTS", "TOTAL ARMY POINTS", "POWER LEVEL", "ARMY FACTIONS USED",  "TOTAL REINFORCEMENT POINTS" ]

            var requiredInfo = req.body.initialString.split(/\+{2,}/)[1].trim().split("\n");

            console.log(req.body.initialString.split(/\+{2,}/)[1].trim().split("\n"));

            var requiredInfoObj = {};

            var missing = list.filter((value) => {
                let same = false;
                requiredInfo.forEach(e => {
                    if (e.split("+")[1].split(":")[0].toUpperCase().includes(value)) {
                        same = true;
                    }
                });

                console.log(same);

                return !same;
                
            });

            console.log(missing);

            if (missing.length > 0) {
                missing.filter(val => val.includes("Player"));
                missing = missing.join(", ").split("+").join("").split(":").join("");
                res.end(`You are missing ${missing}`);
            } else {
                requiredInfo.forEach(element => {
                    let key = element.split("+")[1].split(":")[0].replace(/\s+/g, '');
                    let val = element.split("+")[1].split(":")[1].replace(/\s+/g, '');
                    requiredInfoObj[key] = val;
                });
            }

            console.log(requiredInfoObj);
        }

        




        // if (armyList.length != 9) {
        //     res.end("you are missing some info!")
        // }

        // var Player = armyList[1].split("+")[1].split(":")[1].replace(/\s+/g, '');
        // var REPORTEDARMYFACTION = armyList[2].split("+")[1].split(":")[1].replace(/\s+/g, '')
        // var TOTALCOMMANDPOINTS = armyList[3].split("+")[1].split(":")[1].replace(/\s+/g, '')
        // var TOTALARMYPOINTS = armyList[4].split("+")[1].split(":")[1].replace(/\s+/g, '')
        // var POWERLEVEL = armyList[5].split("+")[1].split(":")[1].replace(/\s+/g, '')
        // var ARMYFACTIONSUSED = armyList[6].split("+")[1].split(":")[1].replace(/\s+/g, '')
        // var TOTALREINFORCEMENTPOINTS = armyList[7].split("+")[1].split(":")[1].replace(/\s+/g, '')


        // console.log("Player: " + Player + "\n" + "REPORTEDARMYFACTION: " + REPORTEDARMYFACTION + "\n" + "TOTALCOMMANDPOINTS: " +
        //     TOTALCOMMANDPOINTS + "\n" + "TOTALARMYPOINTS: " + TOTALARMYPOINTS + "\n" + "POWERLEVEL: " + POWERLEVEL + "\n" + "ARMYFACTIONSUSED: " +
        //     ARMYFACTIONSUSED + "\n" + "TOTALREINFORCEMENTPOINTS: " + TOTALREINFORCEMENTPOINTS)


        // if (REPORTEDARMYFACTION == "") {
        //     res.end("REPORTEDARMYFACTION Missing")
        // }

        // if (TOTALCOMMANDPOINTS == "") {
        //     res.end("TOTALCOMMANDPOINTS Missing")
        // }

        // if (TOTALARMYPOINTS == "") {
        //     res.end("TOTALARMYPOINTS Missing")
        // }

        // if (POWERLEVEL == "") {
        //     res.end("POWERLEVEL Missing")
        // }

        // if (ARMYFACTIONSUSED == "") {
        //     res.end("ARMYFACTIONSUSED Missing")
        // }

        // if (TOTALREINFORCEMENTPOINTS == "") {
        //     res.end("TOTALREINFORCEMENTPOINTS Missing")
        // }
    }
}