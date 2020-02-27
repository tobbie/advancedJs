// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
    refunds: []
  }
  
 function Item(name, price){
     this.name = name;
     this.price = price;
     this.tax = this.price * 0.03;
 }
  
  //Implement a cart feature:
  // 1. Add items to cart.
  // 2. Add 3% tax to item in cart
  // 3. Buy item: cart --> purchases
  // 4. Empty cart
  
  //Bonus:
  // accept refunds.
  // Track user history.

  function addItemToCart(item, user){
      user.cart.push(item);
      return user;
  }

  
  

  function buyItem(user){
     user.cart.forEach(item => {
         user.purchases.push(item);
     })

     return user;
  }

  function emptyCart(user){
      user.cart = [];

      return user;
  }

  function refundItem(item, user){
      user.refunds.push(item);
      return user;
  }

 let item1 = new Item('Soap', 5);

  console.log(addItemToCart(item1, user));

  let item2 = new Item('Towel', 10);
  let item3 = new Item('Black Shoe', 20);

   let res1 = addItemToCart(item2, user);

    addItemToCart(item3, user);
   console.log(res1);
   let res2 = buyItem(res1);
   console.log(res2);

   let res3 = emptyCart(res2);
   console.log(res3);

   let res4 = refundItem(item3, res3);
   console.log(res4);
       
   
