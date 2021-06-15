var Point5 = /** @class */ (function () {
    // this is short hand for exactly same as above, assign to this.x
    function Point5(x, y) {
        this.x = x;
        this.y = y;
    }
    Point5.prototype.draw = function () {
        console.log(this.x + ',' + this.y);
    };
    Point5.prototype.distance = function (other) {
        console.log((other.x - this.x) + ',' + (other.y - this.y));
    };
    Object.defineProperty(Point5.prototype, "X", {
        // This is a property, is a clean get setter
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point5.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point5;
}());
var point = new Point5(1, 2);
point.X = 10;
point.Y = -3;
console.log(point.X);
console.log(point.Y);
