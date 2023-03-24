import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';


function App() {
  const showCart = useSelector(state=> state.ui.cartIsVisible);
  //const cartItems=useSelector(state=>state.cart.items) //for conditional rendering
  return (
    <Layout> 
      { showCart && <Cart /> } 
      <Products />
    </Layout>
  );
}

export default App;