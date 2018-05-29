var info = {

    identifier: "_storeAvatar",
    
    // Names created by index+_+propName+identifier" 
    // example "1_hair_storeAvatar"
    hair: [
        {
            // swapHair1
            modelURL: "https://hifi-content.s3.amazonaws.com/jimi/avatar/hair/artie/swapHair1.fbx",
            jointName: "HeadTop_End",
            translation: {"x": 0, "y": 0, "z": 0},
            rotation: {"x": 0, "y": 0, "z": 0, "w": 0},
            scale: 1,
            texture: [
                // uses default index 0 texture, can cycle through
                // eventually will have color palette on the left and all hairs will change color accordingly
                // will be hosted where folder is the storeAvatar > hair_1 > red1.png, blue1.png etc.
                "https://hifi-content.s3.amazonaws.com/jimi/avatar/hair/artie/Hair_DefaultStylizedFemale_ShortHair_DiffuseMap.png",
                "https://hifi-content.s3.amazonaws.com/jimi/avatar/hair/artie/Hair_DefaultStylizedFemale_ShortHair_DiffuseMap_2.png"
            ]
        },
        {
            // messyHair
            modelURL: "https://hifi-content.s3.amazonaws.com/jimi/avatar/hair/messy/jimiHair.fbx",
            jointName: "HeadTop_End",
            translation: { "x": 0, "y": 0, "z": 0 },
            rotation: { "x": 0, "y": 0, "z": 0, "w": 0 },
            scale: 1,
            texture: [
                "https://hifi-content.s3.amazonaws.com/jimi/avatar/hair/messy/Hair3_defaultMat1_Base_Color.png",
                "https://hifi-content.s3.amazonaws.com/jimi/avatar/hair/messy/Hair3_defaultMat1_Base_Color_2.png"
            ]
        }
    ],
    clothes: [],
    avatar: []

};