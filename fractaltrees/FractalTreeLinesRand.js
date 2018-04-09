/* 
 * Builds 2D Fractal Tree in Hifi using Line Entities and random values.
*/

var depth = 5;
var startHeight = 2;
var startAngle = 0;
var startPosition = {x: 0, y: 0, z: 0};

// Boundaries for randomly generated values
var minDeg = -60;
var maxDeg = 60;
var minHeight = 0.1;
var maxHeight = 1.5;

var degreesToRadians = function(degrees) {
    return (degrees * Math.PI) / 180;
}

function drawFractalTreeLines(depthToGo, nxtPosStart, prevAngleDeg, nxtHt) {

    var endPos = {
        x: nxtPosStart.x + (nxtHt * Math.sin(degreesToRadians(prevAngleDeg))),
        y: nxtPosStart.y + (nxtHt * Math.cos(degreesToRadians(prevAngleDeg))),
        z: 0
    }
    
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

    var randNumSplit = Math.random() > 0.5 ? 2 : 3;

    for (var i = 0; i < randNumSplit; i++){
        var randAngle = Math.random() * (maxDeg - minDeg) + minDeg;
        var randHt = Math.random() * (maxHeight - minHeight) + minHeight;

        drawFractalTreeLines(depthToGo - 1, endPos, prevAngleDeg + randAngle, randHt);
    }
}

drawFractalTreeLines(depth, startPosition, startAngle, startHeight);