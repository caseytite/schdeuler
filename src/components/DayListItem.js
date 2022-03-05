import React from 'react';
import classNames from 'classnames';
import './DayListItem.scss';

// displays each individual day of the week and spots remaining
export default function DayListItem(props) {
  const { name, spots, setDay, daySelected } = props;

  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': daySelected,
    'day-list__item--full': !spots,
  });

//sets the day when clicked
  const dayHandler = () => {
    setDay(name);
  };

//dynamically displays the spots remaining for the day
  const formatSpots=(spots)=>({
      0:<h3 className="text--light">no spots remaining</h3>,
      1:<h3 className="text--light">{spots} spot remaining</h3>,
    }[spots] || <h3 className="text--light">{spots} spots remaining</h3>)

  return (
    <li onClick={dayHandler} className={dayClass} data-testid="day">
      <h2 className="text--regular">{name}</h2>
      {formatSpots(spots)}
    </li>
  );
}
