/// <reference path="typings/jquery/jquery.d.ts" />
//Module
var shape;
(function (shape) {
    var Point = (function () {
        //constructor
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        //interface implementation
        Point.prototype.getdist = function () { return Math.sqrt(this.x * this.x); };
        // static member
        Point.origin = new Point(0, 0);
        return Point;
    }());
    shape.Point = Point;
})(shape || (shape = {}));
function sumAll(n1, n2, n3) {
    alert(n1 + n2 + n3);
}
//instantiation place
var p = new shape.Point(3, 4);
var dist = p.getdist();
