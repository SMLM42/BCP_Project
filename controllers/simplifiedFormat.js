// Example:

// Battalion Detachment 5CP (Tau Empire) [ 13PL, 201pts]

// Sept: Sa’cea

// -HQ-

// Cadre Fireblade [2pl, 42pts] markerlight, pulse rifle, photon grenades
// Ethereal [2pl , 45pts] Warlord, Honor Blade

// -Troop-

// Strike Team [3pl, 38pts] x5, shasui, markerlight, pulse rifle, photon grenades
// Strike Team [3pl, 38pts] x5, shasui, markerlight, pulse rifle, photon grenades
// Strike Team [3pl, 38pts] x5, shasui, markerlight, pulse rifle, photon grenades

// -Elites-

// Strike Team [3pl, 38pts] x5, shasui, markerlight, pulse rifle, photon grenades
// Strike Team [3pl, 38pts] x5, shasui, markerlight, pulse rifle, photon grenades


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
module.exports = simplifiedObj = {
  validate: (str, res) => {
    class obj {
      constructor() {
        this.detachment = "";
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

    let unit = "";
    let inUnit = false;

    if (str) {
      let detachmentObj = {}

      var lines = str.trim().split(/\s*[\r\n]+\s*/g);
      console.log(lines);

      lines.forEach((element, index) => {
        detachmentLine = lines[0].split("Detachment");
        detachmentObj.detachment = detachmentLine[0];
        detachmentObj.CP = parseInt(detachmentLine[1].split("CP")[0].trim());

        // if the lines are still in the unit, append the line to the unit string
        if (inUnit) {
          unit += element;
        }

        // check if the line begin with -,+, or = for unit
        // /(?-=\+)+/g
        if (lines.slice(0) === "-") {
          // if true, append line to unit string
          unit += element;
          // set variable to true
          inUnit = true;
        }

        // if new line is not part of the unit, append the unit string to the file and set inUnit to false
        if (inUnit && (lines === "")) {

          inUnit = false;

          unit = "";
        }

        let typeDetachment;

        lines.forEach((element, index) => {
          if (index % 2 === 0) {
            typeDetachment = element;
          } else {
            let num = element.split("\n").filter(Boolean).length
            detachmentObj[typeDetachment] = num;
          }
        });

        console.log(detachmentObj);
      })
    };
  }
}