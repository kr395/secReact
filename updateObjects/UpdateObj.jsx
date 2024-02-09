import React from "react";
import { useState } from "react";
export default function UpdateObj() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 2024,
  });

  return (
    <div>
      <h4>Car Name : </h4>
      <input
        type="text"
        placeholder="Input Car Name"
        onChange={(e) => {
          setCar((c) => ({ ...c, brand: e.target.value }));
        }}
      ></input>
      <h4>Model : </h4>
      <input
        type="text"
        placeholder="Input Model"
        onChange={(e) => {
          setCar((c) => ({ ...c, model: e.target.value }));
        }}
      ></input>
      <h4>Year : </h4>
      <input
        type="number"
        max={2024}
        placeholder="Input Year"
        onChange={(e) => {
          setCar((c) => ({ ...c, year: e.target.value }));
        }}
      ></input>
      <p>
        Your Chosen Car is {car.brand} {car.model} {car.year}
      </p>
    </div>
  );
}
