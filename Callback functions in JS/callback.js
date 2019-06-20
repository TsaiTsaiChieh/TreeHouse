function sayHello() {
    console.log('Hello');
}

/* Anonymous function */
const sayHello = function () {
    console.log('Hello');
}
function executeCallback(callback) {
    callback();
}

executeCallback(sayHello);

/* Inlining function */
executeCallback(function () {
    console.log('Hello');
});

/* Arrow function */
executeCallback(() => {
    console.log('Hello');
});
executeCallback(() => console.log('Hello'));