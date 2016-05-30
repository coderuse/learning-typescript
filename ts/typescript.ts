interface IStudent {
  firstName: string;
  lastName: string;
  greet(): void;
};

var student: IStudent = {
  firstName: 'John',
  lastName: 'Doe',
  greet: () => {
    
  }
};

var graduateStudent = {
  firstName: "Samara",
  lastName: "Braithweight"
}

function doSomething(obj: IStudent) {

}

doSomething({
  firstName: 'Jane',
  lastName: 'Doe',
  greet: function () {
    
  }
});