import React from "react";
import classNames from "classnames";
import './DayListItem.scss'

export default function DayListItem(props) {

  const {name, spots, setDay, selected} = props

  const dayClass= classNames('day-list__item',{
    '--selected': selected,
    '--full': !spots
  })

  const dayHandler = (e) => {
    setDay(name)
  }
  const formatSpots = (spots) => {

    // let text = spots === 1 ? 'spot remaining' : !spots ? 'no spots remaining' : 'spots remaining'
    
    if(!spots){
      return <h3 className="text--light">no spots remaining</h3>
    }else if(spots === 1){
      return <h3 className="text--light">{spots} spot remaining</h3>
    }
    return <h3 className="text--light">{spots} spots remaining</h3> 
   

  //  return <h3 className="text--light">{spots} {text}</h3>
  }

  return (
    <li onClick={dayHandler} className={dayClass.replace(' ','')}>
      <h2 className="text--regular">{name}</h2> 
      {formatSpots(spots)}
    </li>
  );
}

