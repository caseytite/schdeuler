import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {

  const {value, days, onChange} = props

  const daysOutput = days.map(day => {
    return (
      <DayListItem 
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === value}
        setDay={onChange} />
    )
  })

  return (
    <ul>
      {daysOutput}
    </ul>
  )
}

export default DayList;