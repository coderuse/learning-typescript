class Student {
  
  private get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  
  constructor(public firstName: string, public lastName: string) {
  }
  
  greet() {
    return 'Hello, ' + this.fullName + '!!!';
  }
  
  publicMethod = function () {
    
  };
  
  private privateMethod = function () {
    
  };
}

var student = new Student('John', 'Doe');

student.publicMethod();

console.log(student['fullName']);