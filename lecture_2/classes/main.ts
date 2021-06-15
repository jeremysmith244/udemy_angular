// Thank goodness for a decent class structure...

class Point {
    x: number;
    y: number;
    draw() {
        console.log(this.x+','+this.y);
    }
    distance(other: Point) {
        console.log((other.x - this.x) + ','+ (other.y - this.y));
    }
}

let myPoint = new Point();
myPoint.x = 1;
myPoint.y = 3;

let yourPoint = new Point();
yourPoint.x = 7;
yourPoint.y = 0;

myPoint.draw();
yourPoint.draw();
myPoint.distance(yourPoint);
