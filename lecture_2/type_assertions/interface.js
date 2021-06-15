var drawPoint = function (point) {
    console.log('Im a numbered point');
};
// Allowed
drawPoint({
    x: 1,
    y: 2
});
// Error
drawPoint({
    x: 1,
    y: 'a'
});
