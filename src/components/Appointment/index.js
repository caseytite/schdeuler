import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Status from './Status';
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Confirm from './Confirm';
import Error from './Error';

//Dynamically displays the views on the bookings page to the user based on the modes

const Appointment = (props) => {
  const {
    id,
    time,
    interview,
    interviewersForDay,
    bookInterview,
    cancelInterview,
  } = props;
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVING = 'SAVING';
  const DELETE = 'DELETE';
  const CONFIRM = 'CONFIRM'
  const EDIT = 'EDIT'
  const ERROR_SAVE = "ERROR_SAVE"
  const ERROR_DELETE = 'ERROR_DELETE'
 
  // function that enables ability to switch modes/save history of modes
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  // sends the interview object up to be saved to the database after creation or update
  const onSave = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVING);

      bookInterview(id, interview).then(() => {
        transition(SHOW);
      })
      .catch(()=>{ 
        transition(ERROR_SAVE, true)
      })
  };
  
  // sends the interview id up the chain to be deleted
  const onDelete = (id) => {

    transition(DELETE, true); 
      cancelInterview(id)
      .then(() => { transition(EMPTY)})
      .catch(()=>{
        transition(ERROR_DELETE,true)    
      })
  };

  //cancels an in progress edit, creation or deletion of appointment
  const onCancel = () => {
   back(EMPTY);
  };

  
  return (
    <article className="appointment">
      <Header time={time} />
      {mode === ERROR_SAVE && <Error message={'Error saving to database'} onClose={() => transition(EMPTY)}/>}
      {mode === ERROR_DELETE && <Error message={'Cannot delete'} onClose={() => transition(SHOW)}/>}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message={'Saving'} />}
      {mode === DELETE && <Status message={'Deleting'} />}
      {mode === CONFIRM && <Confirm onCancel={()=>onCancel()} onDelete={() => onDelete(id)} message={'Are you sure you would like to delete?'} />}
      {mode === SHOW && interview && (
        <Show
          id={id}
          student={interview.student}
          interviewer={interview.interviewer}
          onConfirm={() => transition(CONFIRM)}
          onCancel={onCancel}
          onEdit={()=> transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={interviewersForDay}
          onSave={onSave}
          onCancel={onCancel}
        />
      )}
      {mode === EDIT &&  <Form
          interviewers={interviewersForDay}
          onSave={onSave}
          onCancel={onCancel}
          name={interview.student}
          interviewer={interview.interviewer.id}
        /> }
    </article>
  );
};

export default Appointment;
