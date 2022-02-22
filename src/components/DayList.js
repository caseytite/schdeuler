import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {

  const {day, days, setDay} = props

  const daysOutput = days.map(day => {
    return (
      <DayListItem 
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.day}
        setDay={setDay} />
    )
  })

  return (
    <ul>
      {daysOutput}
    </ul>
  )
}

export default DayList;