import React, { useState } from "react";

const Product = ({ name, prize }) => {
  const buy = () => {
    setquantity(quantity + 1);
  };
  const [quantity, setquantity] = useState(0);
  return (
    <>
      <h1>{name}</h1>
      <h5>$ {prize}</h5>
      <button onClick={buy}>Buy</button>
      <h3>Quantity : {quantity}</h3>
      <hr />
    </>
  );
};
const TotalCost = () => {
  return (
    <div>
      <h2>Total is :</h2>
    </div>
  );
};
const ProductList = () => {
  return (
    <div>
      <Product name={"Android"} prize={230} />
      <Product name={"Apple"} prize={270} />
      <Product name={"Nokia"} prize={200} />
      <TotalCost />
    </div>
  );
};
export default ProductList;
