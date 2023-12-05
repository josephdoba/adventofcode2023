const fs = require('fs');
const path = require('path');

const convertTextToJSON = (inputFilePath) => {
  const inputFile = path.join(__dirname, inputFilePath)
  const outputFile = path.join(__dirname, 'day2input.json');

  console.log(`Current working directory: ${process.cwd()}`);
  console.log(`Reading from: ${inputFilePath}`);
  console.log(`Writing to: ${outputFile}`);

  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err){
      console.error("an error occured reading the file:", err);
      return;
    }

    let jsonObj = data.split('\n').map(line => convertLineToJSON(line.trim()));

  fs.writeFile(outputFile, JSON.stringify(jsonObj, null, 4), 'utf8', (err) => {
    if (err) {
      console.error("an error occured writing the json file:", err)
    } else {
      console.log(`The JSON file has been saved to ${outputFile}`);
    }
  });
})};

const convertLineToJSON = (line) => {
  let [gameID, rolls] = line.split(':');
  gameID = parseInt(gameID.trim().replace("Game ", ""));

  let rollResults = rolls.split(';').map(roll => roll.trim());
  let gameRolls = {};

  rollResults.forEach((roll, index) => {
  let colorCounts = { 'Red': 0, 'Green': 0, 'Blue': 0 };

  roll.split(',').forEach(colorCount => {
      let [count, color] = colorCount.trim().split(' ');
      count = parseInt(count);
      color = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
      if (color in colorCounts) {
          colorCounts[color] += count;
      }
  });


    gameRolls[`roll${index + 1}`] = colorCounts
  })


    return { [gameID]: gameRolls };
}

console.log("Converting text file to JSON...");
convertTextToJSON('day2input.txt');

