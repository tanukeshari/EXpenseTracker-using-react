import classes from './CartButton.module.css';
import { useDispatch ,useSelector} from 'react-redux';
import { uiAction } from '../../store/uiSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state=>state.cart.totalQuantity)
  const toggleCartHandler = () =>{
    dispatch(uiAction.toggle());
  }
  
  return (
    <button className={classes.button} 
    onClick ={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;