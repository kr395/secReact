import React from "react";
import { useState } from "react";

export default function Body() {
  return (
    <>
      <div id="body">
        <div id="hr2"></div>

        <h3 id="taskD">Task Details</h3>
        <div id="hr"></div>

        <div id="task">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>

          <button className="btns" id="edit">
            <i id="btnIcon" className="bi bi-pencil-fill"></i>
          </button>
          <button className="btns" id="remove">
            <i id="btnIcon" className="bi bi-trash3-fill"></i>
          </button>
          <button className="btns" id="star">
            <i id="btnIcon" className="bi bi-star-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
}
