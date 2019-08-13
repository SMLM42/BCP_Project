const template = require("../public/assets/js/detachmentTemplates")
module.exports = simplifiedObj = {
  validate: (str, res) => {
    class obj {
      constructor(detachmentName, i) {
        this.id = "Detachment: " + (i + 1);
        this.detachment = detachmentName;
        this.CP = 0;
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

    if (str) {
      let detachmentObj = {};
      let detachmentLine = str.split("Detachment");
      let detachmentName = [];

      let leftPara = str.split('(');
      // console.log(leftPara)
      let factions = []
      for (let i = 1; i < leftPara.length; i++) {
        let finishedFaction = leftPara[i].split(')');
        let faction = finishedFaction[0];
        factions.push(faction)
      }
      let overallFaction = factions[0].trim().split("-")
      if (factions.length != 1) {
        let check = 1
        for (let i = 1; i < factions.length; i++) {
          if (factions[i] === factions[i - 1]) { check++ }
        }
        if (check == factions.length) {
          overallFaction = overallFaction[1]
        }
        else {
          overallFaction = overallFaction[0]
        }
      } else { overallFaction = overallFaction[1] }

      for (var i = 0; i < detachmentLine.length - 1; i++) {
        let detachmentArr = detachmentLine[i].split("\n").filter(Boolean);
        detachmentName.push(detachmentArr[detachmentArr.length - 1].trim());
      }

      if (detachmentName.length > 3) res.end("You have more than 3 detachments and it is illegal");

      for (let i = 0; i < detachmentName.length; i++) {
        if (obj_1 == "") {
          obj_1 = new obj(detachmentName[i], i);
          createObj(obj_1, detachmentLine[i + 1])
        } else if (obj_2 == "") {
          obj_2 = new obj(detachmentName[i], i);
          createObj(obj_2, detachmentLine[i + 1])
        } else if (obj_3 == "") {
          obj_3 = new obj(detachmentName[i], i);
          createObj(obj_3, detachmentLine[i + 1])
        }
      }

      function createObj(obj, arr) {
        let detach = obj.detachment;
        arr = arr.replace("Super-Heavy", "Super Heavy");
        arr = arr.replace("super-heavy", "Super Heavy");
        arr = arr.replace("Mega-kannons", "Mega kannons");
        arr = arr.replace("mega-kannons", "mega kannons");

        if (detach == "Battalion") {
          obj.CP = 5;
        } else if (detach == "Brigade") {
          obj.CP = 12;
        } else if (detach == "Vanguard" || detach == "Spearhead" || detach == "Outrider" || detach == "Supreme Command" || detach == "Air Wing") {
          obj.CP = 1;
        } else if (detach == "Auxiliary Support") {
          obj.CP = -1;
        } else if (detach == "Super Heavy") {
          obj.CP = 3;
        } else {
          obj.CP = 0;
        }

        let detachArr = ["Battalion", "Brigade", "Vanguard", "Spearhead", "Outrider", "Supreme Command", "Air Wing", "Auxiliary Support", "Super Heavy Auxiliary", "Patrol"];

        let match = ["HQ", "Troop", "Elite", "Fast Attack", "Heavy Support", "Flyer", "Lord of War", "Dedicated Transport", "Fortification"];

        let newArr = arr.split(/[-\+=]/);
        if (newArr[0].match(/(\(\w+\s)$/)) {
          let red = [newArr[0], newArr[1]].join(" ");
          console.log(red);
          match.forEach(e => {
            if (red.toLowerCase().match(e.toLowerCase())) res.end("Please use +, -, or = to signal your unit type in/before '" + red.toLowerCase().match(e.toLowerCase()) + "'");
          })
          newArr = newArr.splice(2, newArr.length);
        } else {
          let red = newArr[0];
          console.log(red);
          match.forEach(e => {
            if (red.toLowerCase().match(e.toLowerCase())) res.end("Please use +, -, or = to signal your unit type in/before '" + red.toLowerCase().match(e.toLowerCase()) + "'");
          })
          newArr = newArr.splice(1, newArr.length);
        }
        // console.log(newArr);

        if (newArr.length < 1) {
          res.end("Please use +, -, or = to signal each unit type devision within the detachment : " + detach);
        } else {
          let typeDetachment;
          let msg = "";
          newArr.forEach((element, index) => {
            if (index % 2 === 0) {
              typeDetachment = element.trim();
            } else {
              let num = element.split("\n").filter(Boolean).length;
              let line = element.split("\n").filter(Boolean);
              if (detachArr.includes(line[num - 1].trim())) {
                num--;
                line = line.splice(0, num);
              }
              for (let x = 0; x < num; x++) {
                if (line[x].toLowerCase().match(/[^-\+=]((hq)|(^toop)|(^elite)|(^fast)|(^heavy)|(^flyer)|(^lord)|(^dedicated)|(^fortification))\s?\w+?[^-\+=]/)) res.end("Please use +, -, or = to signal your Unit Type on/before line " + line[x]);
                if (line[x].match(/\w+(\'\w+)?.+/).index === 1) msg += "'word' before [points], ";
                if (line[x].match(/.*\[\s*\d+\s*[Pp][Ll],\s*\d+\s*[pP][Tt][Ss]\s*\].*/) === null && line[x].match(/.*\[\s*\d+\s*[pP][Tt][Ss]\s*,\s*\d+\s*[Pp][Ll]\s*\].*/) === null) msg += "missing something for the pts and/or PL. Please use the following format [#PL, #pts]";
                if (msg !== "") res.end("Following error(s) is/are produced in the line " + line[x] + ":\n" + msg);
              }
              obj[typeDetachment.replace(" ", "_")] = num;
            }
          });
        }
      }
    }

    let finalobj = { Faction: overallFaction, Detachments: { detachment1: obj_1, detachment2: obj_2, detachment3: obj_3 } };
    console.log(finalobj);
    let test = finalobj.Detachments
    let errors = []
    Object.keys(test).forEach(function (det) {
      let D = test[det].detachment
      let total = (test[det].HQ + test[det].Troop + test[det].Elite + test[det].Fast_Attack + test[det].Heavy_Support + test[det].Flyers + test[det].Lord_of_War)
      let transports = 0
      if (template[D].Dedicated_Transports.max === "") {
        transports = total
      }
      console.log("Total: " + total)

      console.log("CP:" + test[det].CP + " Target CP:" + template[D].CP)
      if (test[det].CP != template[D].CP) { }

      console.log("HQ " + test[det].HQ + " min:" + template[D].HQ.min + " max:" + template[D].HQ.max)
      if (test[det].HQ < template[D].HQ.min || test[det].HQ > template[D].HQ.max) { errors.push((test[det].id) + " Invalid # of: HQ") }

      console.log("Troops " + test[det].Troop + " min:" + template[D].Troops.min + " max:" + template[D].Troops.max)
      if (test[det].Troop < template[D].Troops.min || test[det].Troop > template[D].Troops.max) { errors.push((test[det].id) + " Invalid # of: Troops") }

      console.log("Elites " + test[det].Elite + " min:" + template[D].Elites.min + " max:" + template[D].Elites.max)
      if (test[det].Elite < template[D].Elites.min || test[det].Elite > template[D].Elites.max) { errors.push((test[det].id) + " Invalid # of: Elites") }

      console.log("Fast_Attack " + test[det].Fast_Attack + " min:" + template[D].Fast_Attack.min + " max:" + template[D].Fast_Attack.max)
      if (test[det].Fast_Attack < template[D].Fast_Attack.min || test[det].Fast_Attack > template[D].Fast_Attack.max) { errors.push((test[det].id) + " Invalid # of: Fast Attack") }

      console.log("Heavy_Support " + test[det].Heavy_Support + " min:" + template[D].Heavy_Support.min + " max:" + template[D].Heavy_Support.max)
      if (test[det].Heavy_Support < template[D].Heavy_Support.min || test[det].Heavy_Support > template[D].Heavy_Support.max) { errors.push((test[det].id) + " Invalid # of: Heavy Support") }

      console.log("Flyers " + test[det].Flyers + " min:" + template[D].Flyers.min + " max:" + template[D].Flyers.max)
      if (test[det].Flyers < template[D].Flyers.min || test[det].Flyers > template[D].Flyers.max) { errors.push((test[det].id) + " Invalid # of: Flyers") }

      console.log("Lord_of_War " + test[det].Lord_of_War + " min:" + template[D].Lord_of_War.min + " max:" + template[D].Lord_of_War.max)
      if (test[det].Lord_of_War < template[D].Lord_of_War.min || test[det].Lord_of_War > template[D].Lord_of_War.max) { errors.push((test[det].id) + " Invalid # of: Lord of War") }

      console.log("Dedicated_transports " + test[det].Dedicated_Transports + " min:" + template[D].Dedicated_Transports.min + " max:" + transports)
      if (test[det].Dedicated_transports > transports) { errors.push((test[det].id) + " Too many Dedicated Transports") }

      console.log("Fortification " + test[det].Fortification + " min:" + template[D].Fortification.min + " max:" + template[D].Fortification.max)
      if (test[det].Fortification < template[D].Fortification.min || test[det].Fortification > template[D].Fortification.max) { errors.push((test[det].id) + " Invalid # of: Fortification") }

    })
    console.log(errors)
    return finalobj
  }
}
