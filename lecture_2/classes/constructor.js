// Thank goodness for a decent class structure...
var Point2 = /** @class */ (function () {
    // ? signifies optional, python rules positional before optional
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log(this.x + ',' + this.y);
    };
    Point2.prototype.distance = function (other) {
        console.log((other.x - this.x) + ',' + (other.y - this.y));
    };
    return Point2;
}());
var myPoint2 = new Point2(1, 3);
var yourPoint2 = new Point2(3, 5);
myPoint2.draw();
yourPoint2.draw();
myPoint2.distance(yourPoint2);
