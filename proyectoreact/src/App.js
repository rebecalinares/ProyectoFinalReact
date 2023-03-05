import { Footer } from "./componentes/Footer/Footer";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { NavBar } from "./componentes/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./componentes/CartContext/CartContext";
import Cart from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";
import Error404 from "./componentes/Error/Error404";
import Agradecimiento from "./componentes/Agradecimiento/Agradecimiento";

const App = () => {
  return (
    <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/agradecimiento/:id" element={<Agradecimiento />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
    </CartContextProvider>
  )
};

export default App;
