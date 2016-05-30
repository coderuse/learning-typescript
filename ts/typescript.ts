var student = {
  firstName: 'John',
  lastName: 'Doe'
};

function doSomething(obj: {firstName: string; lastName: string; greet?: () => void;}) {
  
}

doSomething({
  firstName: 'Jane',
  lastName: 'Doe'
});