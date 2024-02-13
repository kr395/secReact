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
        <h4 id="introTxt">Let's See....</h4>
        <h1 id="wtd">What TODO</h1>
        <hr id="hr"></hr>
      </div>
      <div id="head">
        <div id="addDiv">
          <input id="inTaskName" type="text" placeholder="What to do?" />
          <input id="inDate" type="date" placeholder="What to do?" />
          <input id="inStartTime" type="time" placeholder="What to do?" />
          <input id="inEndTime" type="time" placeholder="What to do?" />
          <button id="reset">Reset</button>
          <input id="addTask" type="button" value="Add Task" />
        </div>
      </div>
      <div id="body">
        <div id="Task">
          <h3>Task Details</h3>
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
      <div id="footer">
        <p>End of the Page</p>
      </div>
    </div>
  );
}
