class Point5 {

    // this is short hand for exactly same as above, assign to this.x
    constructor(private x?: number, private y?: number) {
    }
    draw() {
        console.log(this.x+','+this.y);
    }
    distance(other: Point5) {
        console.log((other.x - this.x) + ','+ (other.y - this.y));
    }
    // This is a property, is a clean get setter
    get X() {
        return this.x;
    }
    set X(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this.x = value;
    }
    get Y() {
        return this.y;
    }
    set Y(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this.y = value;
    }
}

let point = new Point5(1,2);
point.X = 10;
point.Y = -3;
console.log(point.X);
console.log(point.Y);


//  Convention
class Point6 {

    // this is short hand for exactly same as above, assign to this.x
    constructor(private _x?: number, private _y?: number) {
    }
    draw() {
        console.log(this._x+','+this._y);
    }
    distance(other: Point6) {
        console.log((other.x - this._x) + ','+ (other.y - this._y));
    }
    // This is a property, is a clean get setter
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._y = value;
    }
}
