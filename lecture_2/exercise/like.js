"use strict";
// Instructions
// Create a class encapsulating a FB like button render
// # total likes
// on/off
// click, flips on/off, changes # total likes
exports.__esModule = true;
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(num_likes) {
        this.state = false;
        if (num_likes) {
            this.num_likes = num_likes;
        }
        else {
            this.num_likes = 0;
        }
    }
    Like.prototype.click = function () {
        if (this.state) {
            this.state = false;
            this.num_likes -= 1;
        }
        else {
            this.state = true;
            this.num_likes += 1;
        }
    };
    Like.prototype.print = function () {
        console.log('Do I like? ' + this.state);
        console.log('This many people like ' + this.num_likes);
    };
    return Like;
}());
exports.Like = Like;
