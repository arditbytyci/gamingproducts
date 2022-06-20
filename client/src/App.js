import Header from "./components/Header";
import { Route , Routes} from 'react-router-dom';
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import AddProduct from "./components/AddProduct";
import ProductsContainer from "./components/Product/ProductsContainer";
import ProductDetail from "./components/Product/ProductDetail";



function App() {
  return (
    <React.Fragment>
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/add" element={<AddProduct/>} exact />
            <Route path="/products" element={<ProductsContainer/>} exact />
            <Route path="/about" element={<About/>} exact />
            <Route path="/products/:id" element={<ProductDetail/>}  exact />
          </Routes>
        </main>
    </React.Fragment>
  );
}

export default App;
