class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Traveller extends Person {
    constructor(name = 'Anonymous', age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let description = super.getGreeting();
        if(this.homeLocation) {
            description += ` I'm visiting from ${this.homeLocation}.`;
        }

        return description;
    }
}

const me = new Person('Caleb', 29);
const kelly = new Traveller('Kelly', 27, 'Atlanta');

console.log(kelly.getGreeting());
console.log(kelly.age);
console.log(kelly.getDescription());
