(function () {
    var listOfSpawnedTrees = [];






    
    var TRIGGER_CONTROLS = [
        Controller.Standard.LT,
        Controller.Standard.RT
    ];

    var hand;
    var _this;

    function Wand() {
    }

    Wand.prototype = {
        preload: function (entityID) {
            _this = this;
            _this.entityID = entityID;
            this.entityID = entityID;
        },
        startEquip: function (entityID, args) {
            print("grabbed the wand!");
            hand = args[0] == "left" ? 0 : 1;
            print(hand);
        },
        continueEquip: function (entityID, args) {
            if (Controller.getValue(TRIGGER_CONTROLS[hand]) > .95) {
                print("triggered!");
            }
        }
    }

})