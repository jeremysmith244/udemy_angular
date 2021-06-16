var Timer = /** @class */ (function () {
    function Timer(counter) {
        var _this = this;
        if (counter === void 0) { counter = 90; }
        this.counter = counter;
        var intervalId = setInterval(function () {
            _this.counter = _this.counter - 1;
            console.log(_this.counter);
            if (_this.counter === 0)
                clearInterval(intervalId);
        }, 1000);
    }
    return Timer;
}());
var timer = new Timer(1000);
