// script cleans out the store to prepare for re-initialization
// not called often

(function() {

    var searchVec = Vec3.sum(MyAvatar.position, Vec3.multiplyQbyV(MyAvatar.orientation, { x: 0, y: 0.5, z: -3 }))
    var entityIDArr = findEntities(searchVec, 3);
    var props;

    entityIDArr.forEach(entityID => {
        entityProps = Entities.getEntityProperties(entityID, ["name"]);
        if(entityProps.name){
            if(entityProps.name.indexOf("store")
        }
    });

})()