import React from "react";

import { ItemCount } from "./components/ItemCount/ItemCount";
import { Footer} from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar"; 

const App = () => {
  return(
    <div>
      <NavBar />
      <ItemListContainer />
      <Footer />
    </div>
  )
};

export default App;