import './App.css';
import Heading from './Componets/Header';
import TitleCard from './Componets/Title';
import CartLine from './Componets/Cart';
import CartFoot from './Componets/Footer';
import { cartData } from './Data/data';
import { useState } from 'react';

function App() {
  const[cartCount, setCartCount] = useState(0)

  return (
    <div className="App">
      <Heading
      cartCount={cartCount}
       />
      <TitleCard/>
      <div class = "container px-4 px-lg-5 mt-5 d-flex justify-content-center flex-column" >
        <div class ="row gx-4 gx-md-5 row-cols-4 row-cols-md-3 row-cols-xl-4 justify-content-center">
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
          </div>
    </div>
      <CartFoot/>
    </div>
  );
}

export default App;
