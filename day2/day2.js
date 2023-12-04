const fs = require('fs');
const path = require('path');
// let fileContent = fs.readFileSync('AdventOfCode2023/day2/day2input.txt');

const fs = require('fs');
const path = require('path');

const convertTextToJSON = (inputFilePath) => {
  const outputFile = path.join(__dirname, 'output.json');

  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err){
      console.error("an error occured reading the file:", err);
      return;
    }

    let jsonObj = data.split('\n').map(line => {
      return { 'data': line.trim()}; // This is the data structure you'll need to set manually.
  })

  fs.writeFile(outputFile, JSON.stringify(jsonObj, null, 4), 'utf8', (err) => {
    if (err) {
      console.error("an error occured writing the json file:", err)
    } else {
      console.log(`The JSON file has been saved to ${outputFile}`);
    }
  });
})};



// Replace 'input.txt' with the path to your text file
convertTextToJSON('day2/day2input.txt');




/*
 each game is listed with an id number, followed by a semi-colon seperated

Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).

In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.
*/
