(function () {
    var IMAGE_MODEL = "https://hifi-content.s3.amazonaws.com/jimi/avatar/hair/artie/swapHair1.fbx";
    var DEFAULT_IMAGE = "https://hifi-content.s3.amazonaws.com/jimi/avatar/hair/artie/Hair_DefaultStylizedFemale_ShortHair_DiffuseMap.png";
    Entities.addEntity({
        type: "Model",
        name: "hair_1",
        position: Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.5, z: -3 })),
        rotation: MyAvatar.orientation,
        dimensions: {
            x: 1,
            y: 1,
            z: 1
        },
        collisionless: true,
        modelURL: IMAGE_MODEL,
        textures: JSON.stringify({ "tex.picture": DEFAULT_IMAGE }),
        lifetime: -1
    });
})()