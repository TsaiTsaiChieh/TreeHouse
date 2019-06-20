
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
}

function makeGreen(element) {
    element.style.backgroundColor = "green";
}

function addStyleToElement(element, callback) {
    callback(element);
}


addStyleToElement(div1, makeRed);
addStyleToElement(div2, makeBlue);
addStyleToElement(div3, makeGreen);

// makeRed(div1);
// makeBlue(div2);
// makeGreen(div3);

const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

function spinElement(event) {
    //Applies spinning animation to button element
    event.target.className = "spin";
}

const clickHandler = (event) => { event.target.className = 'spin'; };
btn1.addEventListener('click', clickHandler);
btn2.addEventListener('click', clickHandler);
btn3.addEventListener('click', clickHandler);