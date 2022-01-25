import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartCheckoutIsShown, setCartCheckoutIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showChekoutHandler = () => {
    setCartIsShown(false);
    setCartCheckoutIsShown(true);
  };
  const hideCheckoutHandler = () => {
    setCartCheckoutIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} onOrder={showChekoutHandler}/>}
      {!cartIsShown && cartCheckoutIsShown && <Checkout onClose={hideCheckoutHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
