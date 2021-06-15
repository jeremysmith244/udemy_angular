function do_stuff() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Made it to ' + i + '!');
}

function do_stuff_the_tsc_way() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Made it to where i does not exist!');
}

console.log('I am a dumb javascript loop!');
do_stuff();
console.log('I am a fancy typescript boy!');
do_stuff_the_tsc_way();