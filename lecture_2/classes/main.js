// Thank goodness for a decent class structure...
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log(this.x + ',' + this.y);
    };
    Point.prototype.distance = function (other) {
        console.log((other.x - this.x) + ',' + (other.y - this.y));
    };
    return Point;
}());
var myPoint = new Point();
myPoint.x = 1;
myPoint.y = 3;
var yourPoint = new Point();
yourPoint.x = 7;
yourPoint.y = 0;
myPoint.draw();
yourPoint.draw();
myPoint.distance(yourPoint);
