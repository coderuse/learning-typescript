var student = {
  firstName: 'John',
  lastName: 'Doe'
};

function doSomething(obj: {firstName: string; lastName: string;}) {
  
}

doSomething({
  firstName: 'Jane',
  lastName: 'Doe'
});