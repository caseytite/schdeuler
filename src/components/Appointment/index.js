import React from "react";
import "./styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

const Appointment = (props) => {
  const {time, interview} = props
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = 'CREATE'

  const {mode, transition, back} = useVisualMode(interview ? SHOW : EMPTY )

  // const appointment = time ? `Appointment at ${time}` : `No Appointments`;

  const onSave = () => {
    // save interviewer and student id
  }
  const onCancel = () => {
    return transition(EMPTY)
  }
  
  return(
    <article className="appointment">
      <Header time={time} /> 
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
            <Show
              student={interview.student}
              interviewer={interview.interviewer}
            />
          )}
          {mode === CREATE && <Form interviewers={[]} onSave={onSave} onCancel={onCancel}/>}
    </article>
  );

};

export default Appointment;