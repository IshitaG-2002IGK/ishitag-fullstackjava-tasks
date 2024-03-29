// On click of the button the price and quantity must increase or decrease accordingly (hooks concept)

import React, { useState } from 'react';
import './style.css';

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(10);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    setPrice(prevPrice => prevPrice + 10);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      setPrice(prevPrice => prevPrice - 10);
    }
  };

  return (
    <div class="productpage">
      <h1>Product Additon/Deletion - using hooks concepts</h1>
      <p class="product-page-price"><b>Price: $</b>{price}</p>
      <p class="product-page-quantity"><b>Quantity:</b> {quantity}</p>

      <div class="button-inc-dec">
      <button class="button-dec" onClick={handleDecrease}>-</button>
      <button class="button-inc" onClick={handleIncrease}>+</button>
      </div>
      
    </div>
  );
}

export default ProductPage;
