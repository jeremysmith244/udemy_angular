// Thank goodness for a decent class structure...

class Point3 {

    private x: number;
    private y: number;

    // ? signifies optional, python rules positional before optional
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(this.x+','+this.y);
    }
    distance(other: Point3) {
        console.log((other.x - this.x) + ','+ (other.y - this.y));
    }
}

let myPoint3 = new Point3(1, 3);

let yourPoint3 = new Point3(3,5);

myPoint3.draw();
yourPoint3.draw();
myPoint3.distance(yourPoint3);

myPoint3.x = 4;

class Point4 {

    // this is short hand for exactly same as above, assign to this.x
    constructor(public x?: number, private y?: number) {
    }
    draw() {
        console.log(this.x+','+this.y);
    }
    distance(other: Point3) {
        console.log((other.x - this.x) + ','+ (other.y - this.y));
    }
}