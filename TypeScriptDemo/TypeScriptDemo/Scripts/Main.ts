/// <reference path="typings/jquery/jquery.d.ts" />
//interface
interface iPoints {
    getdist(): number;
}


//Module

module shape {

    export class Point implements iPoints {

        //constructor
        constructor(public x: number, public y: number) {
            
        }
        //interface implementation
        getdist() { return Math.sqrt(this.x * this.x) }

        // static member
        static origin = new Point(0, 0);

    }
}

function sumAll(n1: number, n2: number, n3: number) {
    alert(n1 + n2 + n3);
}


//instantiation place
var p: iPoints = new shape.Point(3, 4);
var dist = p.getdist();
