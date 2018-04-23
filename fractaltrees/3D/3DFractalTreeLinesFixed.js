/* 
 * Builds 3D Fractal Tree in Hifi using Line Entities and fixed values.
*/

// Variables used in starting call for drawFractalTreeLines
var depth = 5;
var startHeight = 2;
var startAngle = 0;
var degIncrement = 30;
var htDecrement = 2; // will be nextHeight = curHeight / htDecrement
var pos = Vec3.sum(MyAvatar.position, Vec3.multiply(3, Quat.getFront(Camera.getOrientation())));
var startPosition = {x: 0, y: 0, z: 0};

var entityList = [];

var degreesToRadians = function(degrees) {
    return (degrees * Math.PI) / 180;
}

function drawFractalTreeLines(depthToGo, nxtPosStart, prevAngleDeg, nxtHt, zAngle) {

    var endPos = {
        x: nxtPosStart.x + (nxtHt * Math.sin(degreesToRadians(prevAngleDeg))),
        y: nxtPosStart.y + (nxtHt * Math.cos(degreesToRadians(prevAngleDeg))),
        z: nxtPosStart.z + (nxtHt * Math.sin(degreesToRadians(zAngle))),
    }
    
    Ent = Entities.addEntity({
        type: "Line",
        name: "FT1",
        position: pos,
        color: { red: 155, green: 0, blue: 255 },
        dimensions: {x: 20, y: 20, z: 20},
        lineWidth: 10.0,
        linePoints: [
            nxtPosStart,
            endPos
        ]
    });
    entityList.push(Ent);

    if (depthToGo - 1 === 0) return;

    var nextAngleR = 30;
    var nextAngleL = -30;
    var positiveZAngle = 30;
    var negativeZAngle = -30;

    drawFractalTreeLines(depthToGo - 1, endPos, prevAngleDeg + nextAngleR, nxtHt/1.2, zAngle + positiveZAngle);
    drawFractalTreeLines(depthToGo - 1, endPos, prevAngleDeg + nextAngleR, nxtHt/1.2, zAngle + negativeZAngle);
    drawFractalTreeLines(depthToGo - 1, endPos, prevAngleDeg + nextAngleL, nxtHt/1.2, zAngle + positiveZAngle);
    drawFractalTreeLines(depthToGo - 1, endPos, prevAngleDeg + nextAngleL, nxtHt/1.2, zAngle + negativeZAngle);
}

drawFractalTreeLines(depth, startPosition, startAngle, startHeight, 0);

function deleteFractalTree(){
    for( var i = 0; i < entityList.length; i++){
        Entities.deleteEntity(entityList[i]);
    }
}