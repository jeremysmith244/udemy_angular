// This is bad
let drawLocation = (x1, x2, y1, y2, z1, z2) => {
    // Do stuff
}

//  Much better 
let drawPoints = (point1, point2) => {
    console.log(point1.x);
    console.log(point1.y);
    console.log(point2.x);
    console.log(point2.y);
}

drawPoints({
    x: 1,
    y: 2
},
{
    x: 2,
    y: 1
})

// Not type safe though...
drawPoints({
    x: 'yeah',
    y: 2
},
{
    x: 2,
    y: 1
})

let typeSafe = ( point: { x: number, y: number }) => {
    // But man, this is C++ level gross...
}

// Interfaces!!! to the rescue