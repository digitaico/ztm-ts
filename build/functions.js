"use strict";
const courseName = 'typescript on ZTM';
const yes = true;
const myName = 'Dwigth Eisenhower';
const valor = 5321563;
const f = (message) => {
    return message;
};
// assign func to var
const product = (a, b) => {
    return a * b;
};
// classic function and annotations.
function produ(a, b) {
    return a * b;
}
// classic function with type annotation
function pr3() {
    return (a, b) => a * b;
}
function prr(fn) {
    const result = fn(5, 6);
    console.log(result);
}
// invocar:
prr(produ);
const prod = (a, b) => {
    return a * b;
};
const data = {
    value: '52555',
    x: 156,
    product(a, b) {
        return a * b;
    },
};
const Juan = {
    basic: {
        gender: 'Male',
        age: 30,
        name: 'Juan Macron Dauchamp',
    },
    status: false,
    occupation: 'Employee',
    sports: ['swim', 'run', 'mtb'],
};
