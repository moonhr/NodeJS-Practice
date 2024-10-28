const fs = require("fs");

const jsonFile = fs.readFileSync('./data.json', 'utf-8');
const jsonData = JSON.parse(jsonFile);

if(jsonData){
  console.log(jsonData);
  console.log("reading");
}