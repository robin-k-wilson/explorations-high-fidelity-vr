/* 
 * Builds 2D Fractal Tree in Hifi using Line Entities and fixed values.
*/

// Variables used in starting call for drawFractalTreeLines
var depth = 10;
var startHeight = 2;
var startAngle = 0;
var degIncrement = 30;
var htDecrement = 2; // will be nextHeight = curHeight / htDecrement
var startPosition = {x: 0, y: 0, z: 0};

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

    var nextAngleR = 30;
    var nextAngleL = -30;

    drawFractalTreeLines(depthToGo - 1, endPos, prevAngleDeg + nextAngleR, nxtHt/1.2);
    drawFractalTreeLines(depthToGo - 1, endPos, prevAngleDeg + nextAngleL, nxtHt/1.2);

}

drawFractalTreeLines(depth, startPosition, startAngle, startHeight);