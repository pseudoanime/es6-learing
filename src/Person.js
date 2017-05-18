/**
 * Created by lbalakrishnan on 18/05/2017.
 */

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return this.name + ' says hello.';
    }
}

console.log(new Person('Lakshmi').greet());