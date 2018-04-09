 
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


function drawFractalTreeLines(depthToGo, nxtPosStart, prevAngleDeg, nxtHt) {

    
    var endPos = {
        x: nxtPosStart.x + (nxtHt * Math.sin(degreesToRadians(prevAngleDeg))),
        y: nxtPosStart.y + (nxtHt * Math.cos(degreesToRadians(prevAngleDeg))),
        z: 0
    }
    
    console.log(Object.keys(nxtPosStart));
    console.log(depthToGo, "x pos: ", nxtPosStart.x + Math.sin(degreesToRadians(prevAngleDeg)));
    console.log(depthToGo, "y pos: ", nxtPosStart.y + Math.cos(degreesToRadians(prevAngleDeg)));
    
    Ent = Entities.addEntity({
        type: "Line",
        name: "FT1",
        color: { red: 155, green: 0, blue: 255 },
        dimensions: {x: 20, y: 20, z: 20},
        linePoints: [
            nxtPosStart,
            endPos
        ]
    });
    
    if (depthToGo - 1 === 0) return;
    
    // Math.random() * (max - min) + min;
    var randAngleR = 30; // Math.random() * (maxDeg - minDeg) + minDeg;
    var randAngleL = -30; // Math.random() * (maxDeg - minDeg) + minDeg;

    //var randHeight = Math.random() * (maxHeight - minHeight) + minHeight;
    //var randHeight = ;
    
    drawFractalTreeLines(depthToGo - 1, endPos, prevAngleDeg + randAngleR, nxtHt/1.2);
    drawFractalTreeLines(depthToGo - 1, endPos, prevAngleDeg + randAngleL, nxtHt/1.2);
    
    return;
}

drawFractalTreeLines(5, startPosition, startAngle, 2);

print('hello222');