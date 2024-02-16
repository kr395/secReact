import React from "react";
import { useState } from "react";

export default function Header(){
  return(
      <>
        <div id="head">
          <div id="addDiv">
            <input className="inputFilds" id="inTaskName" type="text" placeholder="What to do?" onChange={(e)=>{

            }}/>
            <input  className="inputFilds" id="inDate" type="date" defaultValue={new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear()} />
            <input className="inputFilds" id="inStartTime" type="time" />
            <input className="inputFilds" id="inEndTime" type="time" />
            <select className="inputFilds" id="inStatus" name="status">
              <option value="pending">Pending</option>
              <option value="inprogress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="deleted">Deleted</option>
              <option value="onhold">On Hold</option>
            </select>
            <button className="btns" id="reset">
              <i className="bi bi-x-square"></i>
            </button>
            <button className="btns" id="reset">
              <i id="loveIcon" className="bi bi-plus-square"></i>
            </button>
          </div>
        </div>
      </>
    
  )
}