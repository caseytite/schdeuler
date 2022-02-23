import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import './InterviewerList.scss'

const InterviewerList = (props) => {

  const {interviewers, onChange, value} = props


  const interviewersArray = interviewers.map(int => {
    return (
      <InterviewerListItem
      key={int.id}
      name={int.name}
      avatar={int.avatar}
      selected={int.id === value}
      setInterviewer={() => onChange(int.id)}
      
      />
    )
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewersArray}
      </ul>
    </section>

  )

}

export default InterviewerList;