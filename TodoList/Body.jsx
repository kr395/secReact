import React from "react";
import { useState } from "react";

export default function Body(){
  const [taskObj, setTaskObj] = useState(0);
  const [todos, setTodos] = useState([
    {
      taskId: 1,
      taskName: "Learn React",
      status: [
        "Pending",
        "In Progress",
        "Completed",
        "Cancelled",
        "Deleted",
        "On Hold",
      ],
      date: " ",
      startTime: "",
      endTime: "",
      isStar: false,
    },
  ]);
  return(
    <>
      <div id="body">
        <div id="hr2"></div>

        <h3 id="taskD">Task Details</h3>
        <div id="hr"></div>

        <div id="task">
          <p>{todos[taskObj].taskId}</p>
          <p>{todos[taskObj].taskName}</p>
          <p>{todos[taskObj].date}</p>
          <p>{todos[taskObj].startTime}</p>
          <p>{todos[taskObj].endTime}</p>
          <p>{todos[taskObj].status[0]}</p>

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
    
  )

  
}