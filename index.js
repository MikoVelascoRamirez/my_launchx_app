const mc = require('./app/missionCommander');

const missionCommanderOnBoarding = new mc("Fernanda Ochoa");
const missionCommanderFrontend = new mc("Rodrigo Plasencia");
const missionCommanderBackend = new mc("Carlo Gilmar");

console.log(missionCommanderOnBoarding.name)
console.log(missionCommanderFrontend.name)
console.log(missionCommanderBackend.name)