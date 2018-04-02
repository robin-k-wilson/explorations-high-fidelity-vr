 
//var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));

var depth = 3;
var startHeight = 3;
var startAngle = 0;
var degIncrement = 30;
var htDecrement = 2; // will be nextHeight = curHeight / htDecrement
var startPosition = {x: 0, y: 0, z: 0};
var minDeg = 10;
var maxDeg = 60;
var minHeight = 2;
var maxHeight = 0.1;

var degreesToRadians = function(degrees) {
    return (degrees * Math.PI) / 180;
}


function drawFractalTreeLines(depthToGo, nxtPosStart, prevAngleDeg) {

    //var randHeight = Math.random() * (maxHeight - minHeight) + minHeight;
    var randHeight = 2;

    var endPos = {
        x: -randHeight * Math.sin(degreesToRadians(prevAngleDeg)),
        y: -randHeight * Math.cos(degreesToRadians(prevAngleDeg)),
        z: 0
    }

    Ent = Entities.addEntity({
        type: "Line",
        name: "FT1",
        color: { red: 155, green: 0, blue: 255 },
        dimensions: {x: 5, y: 5, z: 5},
        linePoints: [
            nxtPosStart,
            endPos
        ]
    });

    if (depthToGo - 1 === 0) return;

    // Math.random() * (max - min) + min;
    var randAngleR = Math.random() * (maxDeg - minDeg) + minDeg;
    var randAngleL = Math.random() * (maxDeg - minDeg) + minDeg;

    

    drawFractalTreeLines(depthToGo - 1, endPos, prevAngleDeg + randAngleR);
    drawFractalTreeLines(depthToGo - 1, endPos, prevAngleDeg + randAngleL);
    
    return;
}

drawFractalTreeLines(depth, startPosition, startAngle);

print('hello222');