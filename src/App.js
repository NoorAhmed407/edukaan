import React from 'react';
import Navbar from './components/Header';
import MainPageProducts from './components/mainPageProducts'
import Carousel from './components/carousal';
import AddProduct from './components/Admin/addProduct';
import MenProduct from './components/menProduct';
import WomenProduct from './components/womenProduct';
import Cart from './components/cart';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const Home = props =>{
  return(
    <div>
      <Navbar />
      <Carousel />
      <MainPageProducts />
    </div>
  );
}


const Men = props => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <MenProduct />
    </div>
  );
}



const Women = props => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <WomenProduct />
    </div>
  );
}


const CartFinal = props=>{
  return(
    <div>
      <Navbar />
      <Cart />
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addProducts" component={AddProduct} />
          <Route path="/menproducts" component={Men} />
          <Route path="/womenproducts" component={Women} />
          <Route path="/cart" component={CartFinal} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
