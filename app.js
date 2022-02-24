var robot = require("robotjs");

console.log("Preparing to wiggle and jiggle...");

const wiggleJiggle = () => {
  const Xcoord = Math.floor(Math.random() * 1000) + 1;
  const Ycoord = Math.floor(Math.random() * 1000) + 1;
  robot.moveMouse(Xcoord, Ycoord);
  console.log("wiggln and jiggln");
};
wiggleJiggle();
setInterval(function () {
  wiggleJiggle();
}, 60000);
