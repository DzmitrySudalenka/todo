var a = 5;


let b = 5;

b = 6;

const c = 6;

/*c = 7;*/

const names = ['Peter', 'Bob'];

names.push('Jannes');

console.log(names);

/*names = [];*/

let name = 'Joe';

name= 'Bob';

const person = {
    name: 'Joe',
    age: 25
}

person.name = 'Bob';

/*person = 'Alice';*/

/*for (var i = 0; i < 3; i++) {*/
for (let i = 0; i < 3; i++) {

    setTimeout(function () {
        console.log(i);
    }, i*100);

}

function square(x) {
    return x*x;
}

const sq = (x) => x*x;

console.log(sq(3));

const arr = ['1', '3', '2', '4'];

const res = arr
    .map((el) => parseInt(el))
    .filter((num) => num%2)
    .reduce((max, value) => Math.max(max, value), 0);

console.log(res);

const greeter = {

    greet: function (name) {
        console.log('Hello', name)
    },

    greetALl: function (names) {
        names.forEach((name) => {
            this.greet(name);
        })
    }

};

greeter.greetALl(['Bob', 'Mark', 'Pete']);

const Person = () => {

}

/*new Person();*/

function fetchOrder(count, start) {

    if (count === undefined) {

        count = 10;

    }

    if (start === undefined) {

        start = 0;

    }

    console.log('Getting', count,
        'orders starting from', start);

}

fetchOrder();

fetchOrder(15);

function findProducts(opts = {minPrice : 10, maxPrice: 20}) {
    console.log(opts);
}

findProducts();

function max(...numbers) {
    console.log(numbers);
}

max(1, 2, 4);

// Spread operator

const arr2 = [1, 2, 3];
const arr3 = [4, 7, 1];

const res2 = Math.max(41, ...arr2, 5, ...arr3, 10);

console.log(res2);

const shallowCopy = [...arr3, ...arr2];

console.log(shallowCopy);

//Destructuring - деструктуризация

const person1 = {

    firstName: 'Peter',

    lastName: 'Smith',

    age: 23,

    role: 'admin'

}

//const firstName = person1.firstName;

//const lastName = person1.lastName;

const {firstName, lastName} = person1;

console.log(firstName, lastName);

const person2 = {

    name: {

        first: 'Peter',

        last: 'Smith',

    },

    age: 23

}

const {name: {first, last}} = person2;

console.log(first, last);

const {name: {first: firstName1, last: lastName1}} = person2;

console.log(firstName1, lastName1);

const {role = 'user'} = person1;

console.log(role);

const {permissions: {role1 = 'user'} = {}} = person1;

console.log('role1 = ',  role1);

function connect({
    host = 'localhost',
    port = 12345,
    user = 'guest'
                 } = {}) {
    console.log('user:', user, 'port:', port, 'user:', user);
}

connect({
    host: 'localhost',
    port: 1829,
    user: 'peter'
});

const dict = {
    duck: 'quack',
    dog: 'woff',
    mouse: 'squeak'
};

const {duck, ...otherAnimals} = dict;

console.log(duck, otherAnimals);

// Array destruction

const fib = [1, 1, 2, 3, 5, 8, 13];

const [a1, b1, c1] = fib;

console.log(a1, b1, c1);

const [, a2, , b2] = fib;

console.log(a2, b2);

const line = [[10, 17], [14, 7]];

const [[p1x, p1y], [p2x, p2y]] = line;

console.log(p1x, p1y, p2x, p2y);

const people = ['chris', 'sandra', 'bob'];

/*const [a3, b3, c3 ='guest'] = people;*/

const [a3, ...others] = people;

/*console.log(a3, b3, c3);*/

console.log(others);

const dict2 = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};

const res3 = Object.entries(dict2)
    .filter(([, value]) => value === 'squeak')
    .map(([key]) => key);

console.log(res3);

const shape = {
    type: 'segment',
    coordinates: {
        start: [10, 15],
        end: [17, 15]
    }
};

const {coordinates: {start: [startX, startY], end: [endX, endY]}} = shape;

console.log(startX, startY, endX, endY);

// Template literals

const user ='Bob';

const num = 17;

const txt = 'Hello, ' + user + ' you have ' + num + ' letters in your inbox.';

const txt1 = `Hello, ${user} you have ${num} letters in yout inbox.`;

console.log(txt);

console.log(txt1);

const txt2 = `Now is ${Date.now()}`;

console.log(txt2);

const html =
    '<ul>' +
    '<li>Item one</li>' +
    '<li>Item two</li>' +
    '</ul>';

const items = ['tea', 'coffee'];

const templateHtml = `
    <ul>
        <li>${items[0]}</li>
        <li>${items[1]}</li>
    </ul>
`;

console.log(html);

console.log(templateHtml);

// Objects

const x = 10;

const y = 30;

const point = {
    x: x,
    y: y,

    draw: function () {
        // ...
    }
};

const point1 = {
    x,
    y,
    draw(arg){
        // ...
    }
};

const prefix = '_blah_';

const data = {
    [prefix + 'name']: 'Bob',
    [prefix + 'age']: 23
};

console.log(data);

const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};

const opts = {
    user: 'john',
    password: 'utopia'
};

/*Object.assign(defaults, opts);

console.log(defaults);*/

const res4 = Object.assign({}, defaults, opts);

console.log(res4);

const person3 = {
    name: 'Bob',
    friends: ['Mark', 'Jacob']
};
person3.friends.push('Jane');

const shallowCopy1 = Object.assign({}, person3);

console.log(shallowCopy1);

// Spread operator for Objects

const defaults1 = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};

const opts1 = {
    user: 'john',
    password: 'utopia'
};

const port = 8080;

const res5 = {
    ...defaults1,
    ...opts1,
    port,
    connect(){}
};

console.log(res5);

// Prototypes

const animal = {
    say: function() {
        console.log(this.name, 'goes', this.voice);
    }
}

/*const dog = {
    name: 'dog',
    voice: 'woof'
}

Object.setPrototypeOf(dog, animal);

const cat = {
    name: 'cat',
    voice: 'meow'
}

Object.setPrototypeOf(cat, animal);

dog.say();

cat.say();*/

/*const dog = Object.create(animal);
dog.name = 'dog';
dog.voice = 'woff';

dog.say();*/

/*function createAnimal(name, voice) {
    const result = Object.create(animal);
    result .name = name;
    result .voice = voice;
    return result;
}

const dog = createAnimal('Dog', 'woff');

const cat = createAnimal('Cat', 'meow');

dog.say();

cat.say();*/

function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function () {
    console.log(this.name, 'goes', this.voice);
}

const dog = new Animal('Dog', 'woff');

const cat = new Animal('Cat', 'meow');

dog.say();

cat.say();

// Classes

class Animal2 {

    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(this.name, 'goes', this.voice);
    }

}

class Bird extends Animal2 {
    constructor(name, voice, canFly) {
        super(name, voice);
        super.say();
        this.canFly = canFly;
    }

    say() {
        console.log('Birds don\'t like to talk')
    }
}

const duck2 = new Bird('Duck', 'quack', true);

duck2.say();

//Class properties

/*

class Counter {

    count = 1;

    inc = () => {

        this.count += Counter.incStep;

        console.log('count = ', this.count);

    }

    static incStep = 2;

    static incrementAll = function (arr) {

        arr.forEach((c) => c.inc());

    };

}

const cnt = new Counter();

console.log(cnt.count);

cnt.inc();

setTimeout(cnt.inc, 1000);

Counter.incrementAll([]);

*/

class Counter {

    constructor() {

        this.count = 0;

        this.inc = () => {

            this.count += Counter.incStep;

            console.log(this.count);

        }

    }

}

Counter.incStep = 2;

Counter.incrementAll = function (arr) {

    arr.forEach((c) => c.inc());

};

const cnt = new Counter();

console.log(cnt.count);

cnt.inc();

setTimeout(cnt.inc, 1000);

Counter.incrementAll([]);















































