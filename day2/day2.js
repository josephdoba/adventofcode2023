const fs = require('fs');

let day2data;

// import data from day2input.json
try {
  const data = fs.readFileSync('day2input.json', 'utf8');
  day2data = JSON.parse(data);
} catch (err) {
  console.error(err)
}

// count all the reds, greens, and blues in each game

for (let i = 0; i < day2data.length; i++) {
  let game = day2data[i];
  let gameID = Object.keys(game)[0];
  let gameRolls = game[gameID];
  let gameIDSum = 0;

  let redCount = 0;
  let greenCount = 0;
  let blueCount = 0;

  Object.keys(gameRolls).forEach(roll => {
    redCount += gameRolls[roll]['Red'] || 0;
    greenCount += gameRolls[roll]['Green'] || 0;
    blueCount += gameRolls[roll]['Blue'] || 0;
  });

  // console.log(`Game ${gameID} had ${redCount} reds, ${greenCount} greens, and ${blueCount} blues`);

  if (greenCount <= 12){
    gameIDSum += gameID;
    console.log(`Game ${gameID} had ${greenCount}. The gameIDSum is now: ${gameIDSum}`)
  }
};



  // if a game had 12 red cubes, AND 13 green cubes, AND 11 blue cubes, it is a possible game, and to add the value of the sum id towards a total sum. For example, if game 1 was valid, and game 3 was valid, the total sum of IDs is 4

/*
 each game is listed with an id number, followed by a semi-colon seperated

Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).

In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.
*/
