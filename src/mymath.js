
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

export default class Graph {
    addNode() {
        console.log('node added')
    }
}

const PI = 3.1415;

export {
    add, subtract as s, multiply, divide, PI
};

/*
export default Graph;*/
