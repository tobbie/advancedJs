var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq =JSON.stringify(user1) == JSON.stringify(user2);
console.log(eq);


const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
function change(number, string, obj1, obj2) {
    number = number * 10; 
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
    
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number);  //1000
console.log(string); //Pete
console.log(obj1.value); // c