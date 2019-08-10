// Example:

// Battalion Detachment 5CP(Chaos - Daemons)[60PL, 1064pts]
// 
// - HQ -
// 
// Be’lakor[14pl, 240pts]Death Hex, Infernal Gaze, Malefic talon, Smite, The Blade of Shadows
// Daemon Prince of Chaos[9pl, 180pts]Khorne, Malefic talon, Skullreaver, Wings
// Daemon Prince of Chaos[9pl, 180pts]Nurlge, Hellforged sword, Malefic talon, Wings
// 
// - Troop -
// 
// Nurglings[3pl, 54pts]x3
// Nurglings[3pl, 54pts]x3
// Nurglings[3pl, 54pts]x3
// Nurglings[3pl, 54pts]x3
// Nurglings[3pl, 54pts]x3
// Nurglings[3pl, 54pts]x3
// 
// - Elite -
// 
// Exalted Flamer[5pl, 70pts]Fire of Tzeentch, Tongues of flame
// Exalted Flamer[5pl, 70pts]Fire of Tzeentch, Tongues of flame
// 
// Supreme Command Detachment 1CP(Chaos - Thousand Sons)[27 PL, 540pts]
// 
// -HQ -
// 
// Daemon Prince of Tzeentch[9pl, 180pts]Malefic talon, Malefic talon, Wings
// Daemon Prince of Tzeentch[9pl, 180pts]Malefic talon, Malefic talon, Wings
// Daemon Prince of Tzeentch[9pl, 180pts]Warlord, Malefic talon, Malefic talon, Wings


// format should be:

// {detachment:
// battalion;
// cp: 5;
// hq: 3;
// troops: 3;
// elites: 0;
// fast_attack: 2;
// heavy_support: 3;
// flyers: 0;
// lord_of_war: 0;
// dedicated_transports: 2;
// fortification: 0
// }
module.exports =  simplifiedObj = {
  validate: (str, res) => {
    class obj {
      constructor(detachmentName) {
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
      for (var i = 0; i < detachmentLine.length-1; i++) {
        let detachmentArr = detachmentLine[i].split("\n").filter(Boolean);
        detachmentName.push(detachmentArr[detachmentArr.length-1].trim());
      }

      for (let i = 0; i < detachmentName.length; i++) {
        if (obj_1 == "") {
          obj_1 = new obj(detachmentName[i]);
          createObj(obj_1, detachmentLine[i+1])
        } else if (obj_2 == "") {
          obj_2 = new obj(detachmentName[i]);
          createObj(obj_2, detachmentLine[i+1])
        } else if (obj_3 == "") {
          obj_3 = new obj(detachmentName[i]);
          createObj(obj_3, detachmentLine[i+1])
        }
      }

      function createObj(obj, arr) {
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

        let detachArr = ["Battalion", "Brigade", "Vanguard", "Spearhead", "Outrider", "Supreme Command", "Air Wing", "Auxiliary Support", "Super-Heavy", "Patrol"];

        let match = ["HQ", "Troop", "Elite", "Fast Attack", "Heavy Support", "Flyer", "Lord of War", "Dedicated Transport", "Fortification"];

        let newArr = arr.split(/[-\+=]/);
        let red = [newArr[0], newArr[1]].join(" ");
        match.forEach(e => {
          if (red.toLowerCase().match(e.toLowerCase())) res.end("Please use +, -, or = to signal your detachment in '" + red.toLowerCase().match(e.toLowerCase()) + "'");
        })
        newArr = newArr.splice(2, newArr.length);

        let typeDetachment;

        // console.log(newArr);
        let msg = "";

        newArr.forEach((element, index) => {
          if (index % 2 === 0) {
            typeDetachment = element.trim();
          } else {
            let num = element.split("\n").filter(Boolean).length;
            let line = element.split("\n").filter(Boolean);
            console.log(line);

            if (detachArr.includes(line[num-1].trim())) {
              num--;
              line = line.splice(0, num-1);
            }

            for (let x = 0; x < line.length; x++) {
              if (line[x].match(/[^-\+=]\w+[^-\+=]/)) res.end("Please use +, -, or = to signal your detachment on line " + line[x]);
              if (line[x].match(/\w+(\'\w+)?.+/).index === 1) msg += "'word' before [points], ";
              if (line[x].match(/.*\[\d+\s?[Pp][Ll],\s?\d+\s?[pP][Tt][Ss]\].*/) === null) msg += "missing something for the pts and/or PL. Please use the follwoing format [#PL, #pts]";
              if (msg !== "") res.end("Following error(s) is/are produced in the line " + line[x] + ":\n" + msg);
            }
            
            obj[typeDetachment.replace(" ", "_")] = num;
          }
        });

      }

      let finalobj = { detachment1: obj_1, detachment2: obj_2, detachment3: obj_3 };
      console.log(finalobj);
      return finalobj
    }
  }
}