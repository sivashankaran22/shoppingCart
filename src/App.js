import './App.css';
import Heading from './Componets/Header';
import TitleCard from './Componets/Title';
import CartLine from './Componets/Cart';
import CartFoot from './Componets/Footer';
import { cartData } from './Data/data';
import { useState } from 'react';

function App() {
  // const[cartValue,setCartValue] = useState(cartData);
  const[cartCount, setCartCount] = useState(0)

  return (
    <div className="App">
      <Heading
      cartCount={cartCount}
       />
      <TitleCard/>
        {cartData.map((prod,idx) => (
          <CartLine 
          productSale ={prod.productSale}
          productUrl ={prod.productUrl}
          productName ={prod.productName}
          productRating ={prod.productRating}
          productFirstPrice ={prod.productFirstPrice}
          productFinalPrice ={prod.productFinalPrice}
          cartCount={cartCount}
          setCartCount={setCartCount}
          />
        ))}
      <CartFoot/>
    </div>
  );
}

export default App;
