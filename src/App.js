import React from 'react';
import ProductCard from './ProductCard';

const dummyProduct = {
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  name: "Fjallraven - Foldsack No. 1 Backpack",
  price: 109.95,
  variants: ["Blue", "Black", "Gray"],
  inStock: true
};

const App = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Product Card UI</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <ProductCard product={dummyProduct} />
        </div>
      </div>
    </div>
  );
};

export default App;
