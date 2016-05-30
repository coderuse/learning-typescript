interface IStudent {
  firstName: string;
  lastName: string;
};

var student = {
  firstName: 'John',
  lastName: 'Doe'
};

var graduateStudent = {
  firstName: "Samara",
  lastName: "Braithweight"
}

function doSomething(obj: IStudent) {

}

doSomething({
  firstName: 'Jane',
  lastName: 'Doe'
});