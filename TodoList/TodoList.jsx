import React from "react";
import { useState } from "react";
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import TaskComp from "./TaskComp.jsx";
import Footer from "./Footer.jsx";

export default function TodoList() {
  return (
    <div className="container">
      <Hero />
      <div id="hr"></div>
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
    </div>
  );
}
