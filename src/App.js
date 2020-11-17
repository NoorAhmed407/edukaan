import React from 'react';
import Navbar from './components/Header';
import MainPageProducts from './components/mainPageProducts'
import Carousel from './components/carousal';
import AddProduct from './components/Admin/addProduct';
import MenProduct from './components/menProduct';
import WomenProduct from './components/womenProduct';
import Cart from './components/cart';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Carousel />
        <Switch>
          <Route path="/" exact component={MainPageProducts} />
          <Route path="/addProducts" component={AddProduct} />
          <Route path="/menproducts" component={MenProduct} />
          <Route path="/womenproducts" component={WomenProduct} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
