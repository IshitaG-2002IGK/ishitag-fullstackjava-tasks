import React, { useState } from 'react';
import './style.css';

function Product() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddProduct = () => {
    setQuantity(quantity + 1);
    setPrice(price + 10);
  };

  const handleRemoveProduct = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setPrice(price - 10);
    }
  };

  return (
    <div class="product">
      {/* <h1 class="product_title"><b>Product</b></h1> */}
      <p><b>Quantity: $</b> {quantity}</p>
      <p><b>Price: $</b> {price}</p>
      <button onClick={handleAddProduct}><b>Add Product</b></button>
      <button onClick={handleRemoveProduct}><b>Remove Product</b></button>
    </div>
  );
}

export default Product;
