// Thank goodness for a decent class structure...

class Point2 {
    x: number;
    y: number;

    // ? signifies optional, python rules positional before optional
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(this.x+','+this.y);
    }
    distance(other: Point2) {
        console.log((other.x - this.x) + ','+ (other.y - this.y));
    }
}

let myPoint2 = new Point2(1, 3);

let yourPoint2 = new Point2(3,5);

myPoint2.draw();
yourPoint2.draw();
myPoint2.distance(yourPoint2);
