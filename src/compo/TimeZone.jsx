import React from 'react'

export const TimeZone = ({timeZone,setTimeZone}) => {
  return (
    <div className='tzDiv'>
      TimeZone:<br></br>
      <select id="myList" onChange={(e)=>{
        setTimeZone(e.target.value)
      }} >
        <option> [UTC+0] </option>
        <option> [UTC+5:30]Indian Standard Time </option>
      </select>
    </div>
  );
}
