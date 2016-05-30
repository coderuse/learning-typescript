class Student {
  firstName: string;
  lastName: string;
  
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  greet() {
    return 'Hello, ' + this.firstName + ' ' + this.lastName + '!!!';
  }
  
  publicMethod = function () {
    
  };
  
  private privateMethod = function () {
    
  };
}

var student = new Student('John', 'Doe');

student.publicMethod();