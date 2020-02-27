const user = {
    name : 'Sam Amadi',
    active: true,
    gender : 'F',
    cart : [],
    purchases : []
}

let person = Object.assign({}, user, {cart : [{name:'coke', price: 90.00}]});
console.log(person);
console.log(user);