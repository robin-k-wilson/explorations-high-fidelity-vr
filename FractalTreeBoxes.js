 
//var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));

var depth = 8;
var startHeight = 3;
var startAngle = 0;
var degIncrement = 30;
var htDecrement = 2; // will be nextHeight = curHeight / htDecrement
var startPosition = {x: 0, y: 0, z: 0};


function drawFractalTreeBoxes(depthToGo, degIncrement, htDecrement, nxtPosition, nxtHeight, nxtDeg) {

    Ent = Entities.addEntity({
        type: "Box",
        name: "FT1",
        position: nxtPosition,
        color: { red: 155, green: 0, blue: 0 },
        dimensions: {
            x: 0.05,
            y: nxtHeight,
            z: 0.05
        },
        rotation: Quat.angleAxis(nxtDeg, {x:0,y:0,z:1})
    });

    if (depthToGo - 1 === 0) return;

    var prevHt = nxtHeight;
    var prevDeg = nxtDeg;
    var prevPos = nxtPosition;

    var nxtHt = prevHt / htDecrement;
    var lDeg = prevDeg - degIncrement;
    var rDeg = prevDeg + degIncrement;

    var degreesToRadians = function(degrees) {
        return (degrees * Math.PI) / 180;
    }

    var xPrevLength = prevPos.x - nxtHt * Math.sin(degreesToRadians(prevDeg));
    var yPrevLength = prevPos.y + nxtHt * Math.cos(degreesToRadians(prevDeg));

    var lPos = {
        x: xPrevLength - (nxtHt/htDecrement) * Math.sin(degreesToRadians(lDeg)),
        y: yPrevLength + (nxtHt/htDecrement) * Math.cos(degreesToRadians(lDeg)),
        z: prevPos.z
    };
    var rPos = {
        x: xPrevLength - (nxtHt/htDecrement) * Math.sin(degreesToRadians(rDeg)), 
        y: yPrevLength + (nxtHt/htDecrement) * Math.cos(degreesToRadians(rDeg)),
        z: prevPos.z
    };

    //depthToGo, degIncrement, htDecrement, nxtPosition, nxtHeight, nxtAngle
    drawFractalTree(depthToGo - 1, degIncrement, htDecrement, rPos, nxtHt, rDeg);
    drawFractalTree(depthToGo - 1, degIncrement, htDecrement, lPos, nxtHt, lDeg);
    
    return;
}

drawFractalTree(depth, degIncrement, htDecrement, startPosition, startHeight, startAngle);
print('hello');