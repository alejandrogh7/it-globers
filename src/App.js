import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from './redux/thunks/productThunks';

//COMPONENTS
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Product from './Components/Product/Product.jsx';
import Form from './Components/Form/Form.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [])

  return (
    <div className="App">
      <LandingPage />
      {products.success ? products.products.map((product) => {
        return <Product 
          key={product.id} 
          id={product.id} 
          title={product.title} 
          description={product.description} 
          product_image={product.product_image} 
          back_image={product.back_image}
          />
      }) : null}
      <Form />
      <Footer />
    </div>
  );
}

export default App;
