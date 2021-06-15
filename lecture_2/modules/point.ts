// Allow export of these types, makes a module
export class Point {
    constructor (private x?: number, private y?: number) {
    }
    draw () {
        console.log(this.x + ' , ' + this.y);
    }
}