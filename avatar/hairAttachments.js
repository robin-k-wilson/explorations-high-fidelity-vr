(function () {
    'use strict';
    var main = function () {
        var attachment = {
            modelURL: "http://mpassets.highfidelity.com/f2793a6a-8345-410a-b3bd-ebd67437ad53-v1/vikinghat.fbx",
            jointName: "HeadTop_End",
            translation: { "x": 0, "y": 0, "z": 0 },
            rotation: { "x": 0, "y": 0, "z": 0, "w": 0 },
            scale: 1,
            isSoft: false
        };

        Window.alert("Wearing item as an attachment.\nTo remove or make adjustments, please use Avatar > Attachment.");

        MyAvatar.attach(attachment.modelURL,
            attachment.jointName,
            attachment.translation,
            attachment.rotation,
            attachment.scale,
            attachment.isSoft);
    };
    main();
    Script.stop();
})();


// var IMAGE_MODEL = "https://hifi-content.s3.amazonaws.com/DomainContent/production/default-image-model.fbx";
// var DEFAULT_IMAGE = "https://hifi-content.s3.amazonaws.com/DomainContent/production/no-image.jpg";
// var entity = Entities.addEntity({
//   type: "Model",
//   position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.5, z: -3 })),
//   rotation: MyAvatar.orientation,
//   dimensions: {
//       x: 0.5385,
//       y: 0.2819,
//       z: 0.0092
//   },
//   shapeType: "box",
//   collisionless: true,
//   modelURL: IMAGE_MODEL,
//   textures: JSON.stringify({ "tex.picture": DEFAULT_IMAGE }),
//   lifetime: 300  // Delete after 5 minutes
// });