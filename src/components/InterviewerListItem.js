import React from "react";
import './InterviewerListItem.scss'
import classNames from "classnames";


const InterviewerListItem = (props) => {


  const {name, avatar, selected, setInterviewer} = props

  const interviewerClass = classNames('interviewers__item', {
    'interviewers__item--selected': selected,
  }) 

  // setInterviewer()

  // const setInterviewerHandler = (e) => {
  //   setInterviewer(id)
  //   console.log('inside list item', e.target.id);
  // }

  return(
    <li className={interviewerClass} onClick={setInterviewer}>
  <img
    className={'interviewers__item-image'}
    src={avatar}
    alt={name}
  />
  {selected && name}
</li>
  )

}

export default InterviewerListItem;