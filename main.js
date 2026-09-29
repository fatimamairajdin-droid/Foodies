
let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");
let count3 = document.getElementById("count3");
let count4 = document.getElementById("count4");

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

let interval1 = setInterval(() => {
    counter1++;
    count1.innerHTML = counter1;

    if (counter1 >= 1287) {
        clearInterval(interval1);
    }
}, 2);


let interval2 = setInterval(() => {
    counter2++;
    count2.innerHTML = counter2;

    if (counter2 >= 5786) {
        clearInterval(interval2);
    }
}, 2);


let interval3 = setInterval(() => {
    counter3++;
    count3.innerHTML = counter3;

    if (counter3 >= 1440) {
        clearInterval(interval3);
    }
}, 2);


let interval4 = setInterval(() => {
    counter4++;
    count4.innerHTML = counter4;

    if (counter4 >= 7110) {
        clearInterval(interval4);
    }
}, 2);