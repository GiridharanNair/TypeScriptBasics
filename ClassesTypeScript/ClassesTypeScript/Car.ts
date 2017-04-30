interface IEngineSpecs {
    cylinders: number;    
    EngineBuild(): number;
}

class Engine implements IEngineSpecs {
    constructor(public cylinders: number, public bhp: number) {

    }
    EngineBuild() {
        return this.cylinders + this.bhp;
    }
}

class Car {
    private _engine: Engine
    //variables
    numberA: number;
    mystring: string;
    //complex types

    constructor(engineval: Engine) {
        this.engine = engineval;
    }

    //Getters
    get engine(): Engine {
        return this._engine;
    }
    //Setters
    set engine(value: Engine) {
        if (value == undefined) {
            throw 'Car needs an engine'
        }
        this._engine = value;
    }

    start(): void {
        alert('Engine Started ' + this.engine.cylinders);
    }
}


window.onload = function () {
    var engine = new Engine(12, 540);
    var car = new Car(engine);
    car.start();
}