import React from "react";
import { useState } from "react";

export default function UpdateArray() {
  const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Papaya",
    "Guava",
    "Pomegranate",
  ];
  const [fruitsList, setFruitsList] = useState(fruits);
  return (
    <div>
      <h4>Fruits List</h4>
      <ul>
        {fruitsList.map((fruit, index) => (
          <li key={index}>
            {fruit}{" "}
            <button
              onClick={() => {
                setFruitsList(fruitsList.filter((_,i) => i !== index));
              }}
            >
              ❌
            </button>{" "}
          </li>
        ))}
      </ul>
      <input id="inputfrt" type="text" placeholder="Add Fruit"></input>
      <button
        onClick={() => {
          const inputFruit = document.getElementById("inputfrt").value;
          document.getElementById("inputfrt").value = "";
          setFruitsList((f) => [...f, inputFruit]);
        }}
      >
        Add Fruit
      </button>
    </div>
  );
}
