const fs = require('fs');

let day2data;

// Import data from day2input.json
try {
  const data = fs.readFileSync('day2input.json', 'utf8');
  day2data = JSON.parse(data);
} catch (err) {
  console.error(err);
}

// Count all the reds, greens, and blues in each game
let gameIDSum = 0;

for (let i = 0; i < day2data.length; i++) {
  let game = day2data[i];
  let gameID = Object.keys(game)[0];
  let gameRolls = game[gameID];
  let gamePossible = true;

  Object.keys(gameRolls).forEach(roll => {
    let redCount = gameRolls[roll]['Red'] || 0;
    let greenCount = gameRolls[roll]['Green'] || 0;
    let blueCount = gameRolls[roll]['Blue'] || 0;
    
    if (redCount > 12 || greenCount > 13 || blueCount > 14) {
      gamePossible = false;
    }
  });

  if (gamePossible) {
    gameIDSum += parseInt(gameID);
  }

  console.log(`The Game: ${gameID} is ${gamePossible ? 'possible' : 'impossible'}.`);
};

console.log(`The total sum of possible game IDs is: ${gameIDSum}`);
