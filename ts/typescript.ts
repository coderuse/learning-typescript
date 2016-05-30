class Student {
  firstName: string;
  lastName: string;
  
  greet() {
    return 'Hello, ' + this.firstName + ' ' + this.lastName + '!!!';
  };
  
  public publicMethod = function () {
    
  }
}

var student = new Student();

student.publicMethod();