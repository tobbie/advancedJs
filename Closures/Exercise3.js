/** 
const array = [1,2,3,4];
for(let i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log('I am at index ' + i)
  }, 3000)
}
**/

function count(){
    for(let i=0; i < 10; i++) {
        setTimeout(function(){
          console.log(i)
        }, 3000)
      }
}

count();
