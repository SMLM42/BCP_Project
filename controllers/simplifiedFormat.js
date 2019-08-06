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

    if (str) {
      let detachmentObj = {}
      detachmentLine = str.split("Detachment");
      for (let i = 1; i < detachmentLine.length; i++) {
        var test = detachmentLine[i].trim().split(" ")

        // if (test.includes("Super-Heavy", 0)) { console.log("yup") }
        // if (test[(test.length - 2)] == "Supreme" || test[(test.length - 2)] == "Air" || test[(test.length - 2)] == "Fortification" || test[(test.length - 2)] == "Auxiliary" || (test[(test.length - 2)] == "Super-Heavy" && (test[(test.length - 1)]) == "Auxiliary")) {
        //   test = (test[(test.length - 2)] + " " + test[test[(test.length - 1)]])
        //   console.log("yup")
        // }

        if (test[(test.length - 1)] == "Auxiliary") {
          console.log(test[(test.length - 2)])
          if ((test[(test.length - 2)] === "Super-Heavy") || (test[(test.length - 2)] === "Heavy")) {
            console.log("yup")
          } else { console.log("nah") }
        }
      }
      // console.log(detachmentLine)
      detachmentObj.detachment = detachmentLine[0];
      detachmentObj.CP = parseInt(detachmentLine[1].split("CP")[0].trim());

      let infoLine = str.split("-");
      infoLine = infoLine.splice(1, infoLine.length);

      let typeDetachment;

      infoLine.forEach((element, index) => {
        if (index % 2 === 0) {
          typeDetachment = element;
        } else {
          let num = element.split("\n").filter(Boolean).length
          detachmentObj[typeDetachment] = num;
        }
      });

      console.log(detachmentObj);
    }
  }
}