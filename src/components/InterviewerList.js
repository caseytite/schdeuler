import React, {useState} from "react";
import InterviewerListItem from "./InterviewerListItem";
import './InterviewerList.scss'

const InterviewerList = (props) => {

  const {interviewers, setInterviewer, interviewer} = props


  const selectInterviewer = () => {
    
  }



  const interviewersArray = interviewers.map(int => {
    return (
      <InterviewerListItem
      key={int.id}
      id={int.id}
      name={int.name}
      avatar={int.avatar}
      setInterviewer={setInterviewer}
      // selected={'doesent matter at all'}
      
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