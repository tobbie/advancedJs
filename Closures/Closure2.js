const multiply = (a,b) => a* b;

const curried = (a) => (b) => a * b;

console.log(multiply(5, 6));

const MulitplyBy5 = curried(5);
console.log(MulitplyBy5(8));
console.log(MulitplyBy5(10));

//higer order function

const hf = (fn) => (a) => a;

let x = hf(function(){
    
})

console.log(x(5));

//closure;

const closure = function(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let getCount = closure();
console.log(getCount());
console.log(getCount());