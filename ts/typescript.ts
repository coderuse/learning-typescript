// Function declarations

// Normal function expression. One thing to remember, the
// assignment does not hoisted to the top
var funcExpression = function (x: number) {
  return x + 10;
};

// Most common and safe function declaration with definition
function funcDeclaration(x: number) {
  return x + 10;
}

//////////// ########### Lambda Expression ########### ////////////
// When one single statement in the function. But it will return 
// the value the statement executed
var lambdaDeclaration1 = (x: number) => x + 10;

// One thing is that, it does not check inside of the function
// In the following example if the else part is omitted, no error
// is raised. This is kind of unexpected
var lambdaDeclaration = (x: number): number => {
  if (x < 10) {
    return x + 10;
  }
  else {
    return x;
  }
};

var fg = lambdaDeclaration(12);

var funcInput = (fn: (x: number) => number) => {
  var x = fn(12);

  console.log(x);
};

funcInput(lambdaDeclaration);

//////////// ########### Overloading ########### ////////////
// By overloading, the use of a function can be 
// restricted, in regards to the passed parameters
function sum(x: number, y: number): number;
function sum(x: string, y: number): number;
function sum(x: number, y: string): number;
function sum(x: string, y: string): number;
function sum(x, y) {
  if (typeof x === 'string') {
    x = parseInt(x, 10);
  }
  if (typeof y === 'string') {
    y = parseInt(y, 10);
  }
  return x + y;
}
console.log(sum(10, "20"));

//////////// ########### Preserve 'this' ########### ////////////
// When it's needed to preserve the value of this, the lamba 
// expression can be used. A _this variable is created like
//  var _this = this; // Be careful to use 'this'. The position
// of the creation of '_this' variable may change the expected 
// result. Specific example is callbacks or the following
var messenger = {
  message: 'Hello, World!!!',
  // If we wrote like //// convey: () => {}, then the _this variable
  // would be declared at the top of the file. Which would not give
  // the expected result. So, when using 'this', better to stick to
  // normal function declaration, unless it's needed to bind callback
  convey: function() {
    setTimeout(() => console.log(this.message), 1000);
  }
};

messenger.convey();