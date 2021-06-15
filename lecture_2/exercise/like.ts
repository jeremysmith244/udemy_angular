// Instructions
// Create a class encapsulating a FB like button render
// # total likes
// on/off
// click, flips on/off, changes # total likes

export class Like {

    private state: boolean;
    private num_likes: number;

    constructor ( num_likes?: number ) {
        this.state = false;
        if (num_likes){
            this.num_likes = num_likes;
        } else{
            this.num_likes = 0;
        }
    }
    
    click() {
        if (this.state) {
            this.state = false;
            this.num_likes -= 1;
        } else {
            this.state = true;
            this.num_likes += 1;
        }
    }

    print () {
        console.log('Do I like? ' + this.state);
        console.log('This many people like ' + this.num_likes);
    }
}