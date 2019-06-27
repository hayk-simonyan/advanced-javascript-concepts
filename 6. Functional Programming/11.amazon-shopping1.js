// Amazon shopping

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

const user = {
    name: 'Hayk',
    active: true,
    cart: [],
    purchases: [],
    addToCart(item) {
      item.price *= 1.03;
      this.cart.push(item);
      return this.cart;
    },
    purchase() {
      if(this.cart.length === 0) console.log('nothing in cart');
      for(let i = 0; i < this.cart.length; i++) {
        this.purchases.push(this.cart[i]);
      }
      this.cart = [];
      return this.purchases;
    }
}

user.addToCart({name: 'car', price: 100500})
user.purchase()
user.cart
