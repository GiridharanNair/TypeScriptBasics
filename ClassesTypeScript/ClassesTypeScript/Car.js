var Engine = (function () {
    function Engine(cylinders, bhp) {
        this.cylinders = cylinders;
        this.bhp = bhp;
    }
    Engine.prototype.EngineBuild = function () {
        return this.cylinders + this.bhp;
    };
    return Engine;
}());
var Car = (function () {
    //complex types
    function Car(engineval) {
        this.engine = engineval;
    }
    Object.defineProperty(Car.prototype, "engine", {
        //Getters
        get: function () {
            return this._engine;
        },
        //Setters
        set: function (value) {
            if (value == undefined) {
                throw 'Car needs an engine';
            }
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert('Engine Started ' + this.engine.cylinders);
    };
    return Car;
}());
window.onload = function () {
    var engine = new Engine(12, 540);
    var car = new Car(engine);
    car.start();
};
//# sourceMappingURL=Car.js.map