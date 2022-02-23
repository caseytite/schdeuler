import React, {Fragment} from "react";
import "./styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

const Appointment = (props) => {
  const {time, id, interview} = props
  
  const appointment = time ? `Appointment at ${time}` : `No Appointments`;

  return(
    <article className="appointment">
      <Header time={time} /> 
      {interview ? 
        <Show 
          student={interview.student} 
          interviewer={interview.interviewer} 
        /> : <Empty /> }
    </article>
  );

};

export default Appointment;