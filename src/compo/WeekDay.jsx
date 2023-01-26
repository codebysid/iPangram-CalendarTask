import React from "react";

export const WeekDay = ({ dateState ,timeZone}) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  let daysWithPast = [];
  let daysWithCheckBox = [];
  days.forEach((ele, key) => {
    if (dateState.includes(ele)) {
      daysWithCheckBox = days.splice(key);
      daysWithPast = [...days];
    }
  });

  const timeStamps = [
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
  ];
  const timeStamps2 = [
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "00:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
  ];
  return (
    <div>
      {daysWithPast.map((ele, key) => {
        return (
          <div className="pastSpan" key={key}>
            <span className="weekDayIND">{ele}</span>
            <span >PAST</span>
          </div>
        );
      })}
     
     <div>
       { daysWithCheckBox.map((ele,key)=>{
            return (
              <div className="masterDiv" key={key}>
                <p className="weekDayIND">{ele}</p>
                <div className="timeZoneDiv">
                  {timeZone === "[UTC+5:30]Indian Standard Time"
                    ? timeStamps.map((ele, key) => {
                        return (
                          <span className="timeStamps" key={key}>
                            <input type="checkbox" name="" id="" />
                            <span>{ele}</span>
                          </span>
                        );
                      })
                    : timeStamps2.map((ele, key) => {
                        return (
                          <span className="timeStamps" key={key}>
                            <input type="checkbox" name="" id="" />
                            <span>{ele}</span>
                          </span>
                        );
                      })}
                </div>
              </div>
            );
        })}
     </div>
    </div>
  );
};
