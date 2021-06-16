class Timer {
    constructor(public counter = 90) {

        let intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            console.log(this.counter)
            if(this.counter === 0) clearInterval(intervalId)
        }, 1000)
    }
}

let timer = new Timer(1000);
