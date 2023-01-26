import './App.css';
import { Header } from './compo/Header';
import { useState ,useEffect} from 'react';
import { TimeZone } from './compo/TimeZone';
import { WeekDay } from './compo/WeekDay';

function App() {
  const [timeString,setTimeString]=useState("Atlantic/Faroe")
  
  let options = {
    weekday:"long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  
  let date = new Date().toLocaleString("en-US", options, {
    timeZone: timeString,
  });
  const [currentDate,setCurrentDate]=useState(new Date())
  const [dateState,setDateState]=useState(date)
  const [timeZone,setTimeZone]=useState("[UTC+0]")

  useEffect(()=>{
    if(timeZone==="UTC+0"){
      setTimeString("Atlantic/Faroe")
    }
    if(timeZone==="UTC+5:30"){
      setTimeString("Asia/Kolkata")
    }
  },[timeZone,dateState,timeString,currentDate])
  return (
    <div className="App">
     <Header
     dateState={dateState}
     setDateState={setDateState}
     timeZone={timeZone}
     timeString={timeString}
     currentDate={currentDate}
     setCurrentDate={setCurrentDate}
     />
     <TimeZone
     timeZone={timeZone}
     setTimeZone={setTimeZone}
     />
     <WeekDay
     dateState={dateState}
     timeZone={timeZone}
     />
    </div>
  );  
}

export default App;
