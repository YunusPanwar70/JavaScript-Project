class StudentData {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    sayAge() {
        console.log(`My age is ${this.age}`);
    }
    saySubject() {
        console.log(`i am student of ${this.subject}`);
    }
};

let a = new StudentData('Yunus', 19, 'BCA');
a.sayName();