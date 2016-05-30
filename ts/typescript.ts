class Student {
  
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  
  constructor(public firstName: string, public lastName: string) {
  }
  
  greet(): string;
  greet(firstName: string, lastName: string): string;
  greet(student: Student): string;
  greet(student?) {
    return 'Hello, ' + this.fullName + '!!!';
  }
}

var student = new Student('John', 'Doe');

console.log(student.fullName);