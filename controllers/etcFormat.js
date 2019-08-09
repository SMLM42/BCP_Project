const controllerObj = {
    validate: (str, res) => {

        class obj {
            constructor(detachmentName) {
                this.detachment = detachmentName;
                this.CP = 0
                this.HQ = 0;
                this.Troop = 0;
                this.Elite = 0;
                this.Fast_Attack = 0;
                this.Heavy_Support = 0;
                this.Flyers = 0;
                this.Lord_of_War = 0;
                this.Dedicated_Transports = 0;
                this.Fortification = 0;
            }
        }

        let obj_1 = "";
        let obj_2 = "";
        let obj_3 = "";
        let string = str.trim().split(/\+{2,}/).filter(Boolean);

        if (string.length < 2) {
            res.end("you are submitting the wrong format");
        } else if (!str.split(/\+{2,}/)[1].includes("+") || !str.split(/\+{2,}/)[1].includes(":")) {
            res.end("you are missing the + or :");
        } else {

            let list = ["REPORTED ARMY FACTION", "TOTAL COMMAND POINTS", "TOTAL ARMY POINTS", "POWER LEVEL", "ARMY FACTIONS USED", "TOTAL REINFORCEMENT POINTS"]
            let requiredInfo = str.split(/\+{2,}/)[1].trim().split("\n");
            let detachmentInfo = str.split(/\+{2,}/)[2];
            let requiredInfoObj = {};
            let missing = list.filter((value) => {
                let same = false;
                requiredInfo.forEach(e => {
                    if (e.split("+")[1].split(":")[0].toUpperCase().includes(value)) {
                        same = true;
                    }
                });
                return !same;
            });

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

            let detachments = detachmentInfo.split("==").filter(value => value !== "\n\n");
            if (detachments[0].includes("\n")) {
                detachments.shift()
            }
            let name = "";
            let detachmentName = []
            let detachmentUnits = []

            for (let i = 0; i < detachments.length; (i = (i + 2))) {
                let values = detachments[i].trim().split("\n").filter(Boolean);
                detachmentName.push(values)
            }
            for (let i = 1; i < detachments.length; (i = (i + 2))) {
                name = detachments[i].trim().split(" ");
                for (let i = 0; i < name.length; i++) {
                    name[i] = name[i].charAt(0).toUpperCase() + name[i].substring(1);
                }
                name = name.join('');
                detachmentUnits.push(name)
            }
            for (let i = 0; i < detachmentName.length; i++) {
                if (obj_1 == "") {
                    obj_1 = new obj(detachmentName[i]);
                    createObj(obj_1, detachmentUnits[i])
                } else if (obj_2 == "") {
                    obj_2 = new obj(detachmentName[i]);
                    createObj(obj_2, detachmentUnits[i])
                } else if (obj_3 == "") {
                    obj_3 = new obj(detachmentName[i]);
                    createObj(obj_3, detachmentUnits[i])
                }
            }
            function createObj(obj, units) {

                let detach = obj.detachment

                if (detach == "Battalion") {
                    obj.CP = 5;
                } else if (detach == "Brigade") {
                    obj.CP = 12;
                } else if (detach == "Vanguard" || detach == "Spearhead" || detach == "Outrider" || detach == "Supreme Command" || detach == "Air Wing") {
                    obj.CP = 1;
                } else if (detach == "Auxiliary Support") {
                    obj.CP = -1;
                } else if (detach == "Super-Heavy") {
                    obj.CP = 3;
                } else {
                    obj.CP = 0;
                }

                let newArr = units.split("\n").filter(Boolean)

                for (let index = 1; index < newArr.length; index++) {
                    let element = newArr[index].split(":");
                    if (element[0].toUpperCase() == "HQ") { obj.HQ++ };
                    if (element[0].toUpperCase() == "EL") { obj.Elite++ };
                    if (element[0].toUpperCase() == "TR") { obj.Troop++ };
                    if (element[0].toUpperCase() == "FA") { obj.Fast_Attack++ };
                    if (element[0].toUpperCase() == "HS") { obj.Heavy_Support++ };
                    if (element[0].toUpperCase() == "FL") { obj.Flyers++ };
                    if (element[0].toUpperCase() == "DT") { obj.Dedicated_Transport++ };
                    if (element[0].toUpperCase() == "LOW") { obj.Lord_of_War++ };
                    if (element[0].toUpperCase() == "FORTIFICATION") { obj_1.FORTIFICATION++ };
                    let line = element[1];
                    let msg = "";
                    if (line.trim().match(/\d?\w+\(\d+\).*/g) === null) msg += "'(number)', ";
                    if (line.trim().match(/.+\[\d+[Pp][Ll]\].+/g) === null) msg += "'[#PL]', ";
                    if (line.trim().match(/.+\[\d+[Pp][Tt][Ss]\]/g) === null) msg += "'[#Pts]'";
                    if (msg !== "") res.end("You are missing " + msg + " in the line '" + newArr[index] + "'\n");
                }
            }
            // }
            // });
        }
        // console.log("obj 1: " + JSON.stringify(obj_1))
        // console.log("obj 2: " + JSON.stringify(obj_2))
        // console.log("obj 3: " + JSON.stringify(obj_3))
        // console.log(obj_1);
        // console.log(obj_2);
        // console.log(obj_3);

        var finalobj = { detachment1: obj_1, detachment2: obj_2, detachment3: obj_3 };
        console.log(finalobj);
        return finalobj

    }
}

module.exports = controllerObj;