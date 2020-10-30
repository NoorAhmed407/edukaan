import React from 'react';
import Navbar from './components/Header';
import MainPageProducts from './components/mainPageProducts'
import Carousel from './components/carousal';
import AddProduct from './components/Admin/addProduct';
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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/addProducts" component={AddProduct} />
      </BrowserRouter>
    </div>
  );
}

export default App;
