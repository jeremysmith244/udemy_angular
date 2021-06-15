// Thank goodness for a decent class structure...
var Point3 = /** @class */ (function () {
    // ? signifies optional, python rules positional before optional
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log(this.x + ',' + this.y);
    };
    Point3.prototype.distance = function (other) {
        console.log((other.x - this.x) + ',' + (other.y - this.y));
    };
    return Point3;
}());
var myPoint3 = new Point3(1, 3);
var yourPoint3 = new Point3(3, 5);
myPoint3.draw();
yourPoint3.draw();
myPoint3.distance(yourPoint3);
myPoint3.x = 4;
