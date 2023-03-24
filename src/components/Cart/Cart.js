import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state=>state.cart.items);
  const cartQuantity = useSelector(state=>state.cart.totalQuantity);
  return (
  <>
  {!cartQuantity && <Card><h2>Cart is empty</h2></Card>}
    {cartQuantity && (<Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>)}
  </>
    
  );
};

export default Cart;