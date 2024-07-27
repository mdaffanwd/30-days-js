// =============================
// Activity1:Class-definition
// =============================
// task 1
class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  greetThePerson() {
    if (this.age !== undefined) {
      return `Hey ${this.name}, your age is ${this.age} right?`;
    } else {
      return `Hey ${this.name}, How are you??`;
    }
  }
  newAge(updatedAge) {
    this.age = updatedAge;
  }
  // task a3.5
  static genericGreetingMsg() {
    return `This is generic message from the Person class`;
  }
  // task a4.7
  get fullname() {
    return `${this.name} ${this.lastName}`;
  }
  // task a4.8
  set newName(name) {
    this.name = name;
  }
  set newLastName(lastName) {
    this.lastName = lastName;
  }
}
const user = new Person("balak", 2);
const user2 = new Person("bache");

// console.log(user.greetThePerson());
// console.log(user2.greetThePerson());

// task 2
user.newAge(15);
// console.log(user.greetThePerson());

// =============================
// Activity 2: Class Inheritance
// =============================
// task 3
class Student extends Person {
  static studentCount = 0;
  constructor(name, age) {
    super(name, age);
    this.studentId = `22AX020${
      Math.floor(Math.random() * (599 - 299 + 1)) + 299
    }`;
    Student.studentCount++;
  }
  printStudentId() {
    return this.studentId;
  }
  greetThePerson() {
    return `Dear Student, Your name is ${this.name} and your studentId is ${this.studentId}`;
  }
  static getStudentCount() {
    return `Total number of students created: ${Student.studentCount}`;
  }
}
const student = new Student("student", 21);
const student2 = new Student("student2", 22);
// console.log(student.printStudentId());
// console.log(student.age);

// task 4
// console.log(student.greetThePerson());

// =============================
// Activity 3: Static Methods and Properties
// =============================
// task 5
// console.log(Person.genericGreetingMsg());
// task 6
// const studentCountMessage = Student.getStudentCount();
// console.log(studentCountMessage);

// =============================
// Activity 4: Getters and Setters
// =============================
// task 7
const userFull = new Person("Md", "Affan", 20);
// console.log(userFull.fullname);
// task 8
userFull.newName = "Mohammed";
userFull.newLastName = "Hassan";
// console.log(userFull);

// =============================
// Activity 5: Private Fields (Optional)
// =============================
// task 9
class Account {
  #balance;
  constructor(initialAmount) {
    if (initialAmount < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.#balance = initialAmount;
  }
  depositMoney(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}`);
    } else {
      console.log("Deposit amount must be positive");
    }
  }
  withdrawMoney(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}`);
    } else if (amount > this.#balance) {
      console.log("Entered Amount is more than than your balance");
    }else{
      console.log("Invalid withdrawal amount");
    }
  }
  getBalance() {
    console.log(this.#balance);
  }
}

// task 10
const account1 = new Account(10000);
// account1.getBalance();
// account1.depositMoney(500);
// account1.getBalance();
// account1.withdrawMoney(1500);
// account1.getBalance();