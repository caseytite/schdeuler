import React from "react";
import classNames from "classnames";
import './DayListItem.scss'

export default function DayListItem(props) {

  const {name, spots, setDay, selected} = props

  const dayClass= classNames('day-list__item',{
    'day-list__item--selected': selected,
    'day-list__item--full': !spots
  })

  const dayHandler = (e) => {
    setDay(name)
  }
  const formatSpots = (spots) => {

    let h2 = spots === 1 ? `${spots} spot remaining` 
    : !spots ? 'no spots remaining' 
    : `${spots} spots remaining`
     
    return <h3 className="text--light">{h2}</h3> 
   
  }

  return (
    <li onClick={dayHandler} className={dayClass}>
      <h2 className="text--regular">{name}</h2> 
      {formatSpots(spots)}
    </li>
  );
}

