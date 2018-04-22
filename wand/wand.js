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
            Entity.editEntity(entityID, {
                userData: "{ \"grabbableKey\": { \"wantsTrigger\": true }, \"wearable\": { \"joints\": { \"RightHand\": [ { \"x\": 0.0813, \"y\": 0.0452, \"z\": 0.0095 }, { \"x\": -0.3946, \"y\": -0.6604, \"z\": 0.4748, \"w\": -0.4275 } ], \"LeftHand\": [ { \"x\": -0.0881, \"y\": 0.0259, \"z\": 0.0159 }, { \"x\": 0.4427, \"y\": -0.6519, \"z\": 0.4592, \"w\": 0.4099 } ] } } }"
            })
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