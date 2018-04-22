var pos = Vec3.sum(MyAvatar.position, Vec3.multiply(3, Quat.getFront(Camera.getOrientation())));

var testLine = Entities.addEntity({
    type: "Line",
    position: pos,
    color: {red: 200, green: 50, blue: 200},
    dimensions: {x: 5, y: 5, z: 5},
    linePoints: [{
      x: 0,
      y: 0,
      z: 0
      }, {
      x: 1,
      y: 1,
      z: -2
      }]
    });