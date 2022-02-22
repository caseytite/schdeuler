import React from "react";
import './InterviewerListItem.scss'
import classNames from "classnames";


const InterviewerListItem = (props) => {


  const {id, name, avatar, selected, setInterviewer} = props

  const interviewerClass = classNames('interviewers__item', {
    '--selected': selected,
  }) 

  const setInterviewerHandler = (e) => {
    setInterviewer(id)
    console.log('inside list item', e.target.id);
  }

  return(
    <li className={interviewerClass.replace(' ','')} >
  <img
    className={'interviewers__item-image'}
    onClick={setInterviewerHandler}
    src={avatar}
    alt={name}
    id={id}
  />
  {selected && name}
</li>
  )

}

export default InterviewerListItem;