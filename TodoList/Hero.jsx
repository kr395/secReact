import React from "react";
import { useState } from "react";

export default function Hero(){
  return(
    <>
      <div className="hero">
        <button id="topLeft">
          <i className="bi bi-heart-fill"></i>
        </button>
        <div id="mid">
          <h4 id="introTxt">Let's See....</h4>
          <h2>What</h2>
          <h1 id="wtd">TODO</h1>
        </div>

        <button id="topRight">
          <i className="bi bi-person-fill"></i>
        </button>
      </div>
    </>
  )
}