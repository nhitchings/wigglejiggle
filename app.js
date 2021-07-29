var robot = require('robotjs');

setInterval(function(){ 
    const Xcoord = Math.floor(Math.random() * 1000) + 1;
    const Ycoord = Math.floor(Math.random() * 1000) + 1;
    robot.moveMouse(Xcoord, Ycoord);
    console.log('wiggln and jiggln');
}, 60000);