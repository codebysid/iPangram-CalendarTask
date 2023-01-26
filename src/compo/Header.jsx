import React from 'react'
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";

export const Header = ({dateState,setDateState,timeZone,timeString,currentDate,setCurrentDate}) => {
     let temp=dateState.indexOf(",")
     let newDate=dateState.slice(temp+1)

     const prevDate=()=>{
        
           let date=currentDate
           date.setDate(currentDate.getDate()-7)
           setCurrentDate(date)
           let options = {
             weekday: "long",
             month: "long",
             day: "numeric",
             year: "numeric",
           };

            date = date.toLocaleString("en-US", options, {
             timeZone: timeString,
           });
           setDateState(date)
        
    }
        const nextDate=()=>{
              let date = currentDate;
              date.setDate(currentDate.getDate() + 7);
              setCurrentDate(date);
              let options = {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              };

              date = date.toLocaleString("en-US", options, {
                timeZone: timeString,
              });
              setDateState(date);
            
        }
     
    return (
      <div>
        <div className="headerDiv">
          <span
            className="previousWeekSpan"
            onClick={() => {
              prevDate();
            }}
          >
            <GoTriangleLeft />
            <a href="_#" className="previousWeekLink">
              Previous Week
            </a>
          </span>
          <span className="currentDate">{newDate}</span>
          <span
            className="nextWeekSpan"
            onClick={() => {
              nextDate();
            }}
          >
            <a href="_#" className="nextWeekLink">
              Next Week
            </a>
            <GoTriangleRight />
          </span>
        </div>
      </div>
    );
}
