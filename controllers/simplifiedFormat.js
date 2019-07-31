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

// took the data parsing framwork and will try to adapt
// require necessary packages
const fs = require("fs");
const readline = require('linebyline');
rl = readline('XYZ.txt');

// set variable for result object
const userInput = {};

// open the file used to append data
fs.open('XYZ.txt', 'a', (err, fd) => {
  if (err) throw err;

  // read through each line from the txt file
  rl.on('line', function (line) {
    // main section that describes what we want to happen to the data
    if (line) {
      line.split(" ");
      // likely need to change these to not pick up same data in every line
      let typeDetachment = line[0];
      let cp = parseInt(line[2].split(""));
      let


    }
  })
    .on('error', function (err) {
      console.log('Error while reading file.', err);
    })
    .on('close', function () {
      // write what to do when you stop reading the txt file
      // close the txt file
      fs.close(fd, (err) => {
        if (err) throw err;
      });
    });
});