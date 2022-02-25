import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {

  const {value, allDays, setDay} = props

  const daysList = allDays.map(day => {
    return (
      <DayListItem 
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        daySelected={day.name === value}
        setDay={setDay} />
    )
  })

  return (
    <ul>
      {daysList}
    </ul>
  )
}

export default DayList;