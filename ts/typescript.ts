class Student {
  
  constructor(public firstName: string, public lastName: string) {
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