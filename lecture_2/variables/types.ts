let count = 5;
count = 'a';

let sloppy;
sloppy = 5;
sloppy = 'a';
sloppy = true;

let better: number;
better = 'a';

// All types of the typescript
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number [] = [1,2,3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red;