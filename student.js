class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.absence = 0;
    }

    test() {
        return `your name is ${this.firstName} ${this.lastName} and you are in grade ${this.grade}`;
    }

    markLate() {
        this.absence += 1;
        return `${this.firstName} has been late ${this.absence} times`;
    }

}

let tom = new Student('tom', 'brady', 4);
let matt = new Student('matt', 'stonie', 1);

console.log(matt.markLate());
console.log(matt.markLate());
console.log(matt.markLate());