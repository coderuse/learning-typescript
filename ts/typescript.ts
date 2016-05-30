// Interface
// In interface short form for a function type can be used
interface IStudent {
  firstName: string;
  lastName: string;
  greet(): void;
};

// Objects implementing an interface must implement all the properties
// No extra properties are allowed
var student: IStudent = {
  firstName: 'John',
  lastName: 'Doe',
  greet: () => {
    
  }
};

// It's also possible to declare the type of a parameter as an interface
function doSomething(obj: IStudent) {

}

// And we have to pass a value with specific properties, described in the interface 
doSomething({
  firstName: 'Jane',
  lastName: 'Doe',
  greet: function () {
    
  }
});