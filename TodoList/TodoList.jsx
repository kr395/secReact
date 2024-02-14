import React from "react";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      taskId: 1,
      taskName: "Learn React",
      status: [
        "pending",
        "inprogress",
        "completed",
        "cancelled",
        "deleted",
        "onhold",
      ],
      date: new Date().toLocaleDateString(),
      startTime: new Date().getTime(),
      endTime: null,
      isStar: false,
    },
  ]);
  return (
    <div className="container">
      <div className="hero">
        <div id="topLeft">
          <i id="loveIcon" className="bi bi-heart-fill"></i>
        </div>
        <div id="mid">
          <h4 id="introTxt">Let's See....</h4>
          <h2>What</h2>
          <h1 id="wtd">TODO</h1>
        </div>

        <div id="topRight">
          <i id="userIcon" className="bi bi-person-fill"></i>
        </div>
      </div>
      <div id="hr"></div>
     
      <div id="head">
        <div id="addDiv">
          <input id="inTaskName" type="text" placeholder="What to do?" />
          <input id="inDate" type="date" />
          <input id="inStartTime" type="time" />
          <input id="inEndTime" type="time" />
          inp
          <button id="reset">Reset</button>
          <button id="reset">Add Task</button>
          
        </div>
      </div>
      
      {/* Body */}
      
      <div id="body">
         <div id="hr"></div>
        
      <h3>Task Details</h3>
         <div id="hr"></div>
        
        <div id="task">
          <p>#</p>
          <p>Task Name</p>
          <p>Date</p>
          <p>Start</p>
          <p>End</p>
          <p>Status</p>
          <p>Edit</p>
          <p>Remove</p>
          <p>Star</p>
        </div>
      </div>
      
      {/* Footer */}
      
      <div id="footer">
        <p>End of the Page</p>
      </div>
    </div>
  );
}
