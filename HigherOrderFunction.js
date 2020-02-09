
const multiplyBy = function(num1){
    return function(num2){
      return num1 * num2;
    }
}

const multiplyBy1 = (num1) =>  (num2) => num1 * num2  // arrow functions
const multiplyByTwo = multiplyBy(2);

//multiplyByTwo(5);


const multiplyByTen = multiplyBy1(10);

var x = multiplyByTen(4);
console.log(x);
  