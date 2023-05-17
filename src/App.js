import React from "react";
import "./style.css";

export default function App() {
  const user = {
    name: "John",
    age: 30,
    email: undefined,
  };
  const product = {
    name: "Headphones",
    price: 49.99,
    inStock: true,
    discount: undefined,
  };
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: undefined,
  };
  const userInput = undefined;

  return (
    <div>
      {user.email !== undefined ? user.email : "No email provided"}
      <h1>Hello StackBlitz!</h1>
      {product.discount !== undefined ? `$${product.discount}` : "No discount available"}

      <p>Start editing to see some magic happen :)</p>
      {car.color !== undefined ? car.color : "Color not specified"}
      <input type="text" value={userInput !== undefined ? userInput : ""} />

    </div>
  );
}
