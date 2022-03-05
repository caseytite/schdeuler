import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

// Form shows an imput field, a list of interviewers to select and save/cancel buttons

const Form = (props) => {
  const { interviewers, onSave, onCancel} = props;

  const [name, setName] = useState(props.name || '');
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

//sets the input field and interviewer state back to null
  const reset = (e) => {
    setName('');
    setInterviewer(null);
  };

//cancels an in progress edit, booking or deletion
  const cancel = () => {
    reset();
    onCancel();
  };

// ensures there is an interviewer selected and a student name provided
  const validate = (name,interviewer) => {
    if(name === ''){
      setError("Student name cannot be blank")
      return
    }

    if(!interviewer){
      setError("Choose an interviewer")
      return
    }

  // sends the student name entered and interviewer selected up the chain to be saved
    setError(null)
    onSave(name,interviewer)
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            value={name}
            placeholder={'Enter Student Name'}
            onChange={(e) => setName(e.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          onChange={setInterviewer}
          interviewers={interviewers}
          value={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={() => cancel(name,interviewer)} danger>
            Cancel
          </Button>
          {<Button onClick={() => validate(name,interviewer)} confirm>
            Save
          </Button>}
        </section>
      </section>
    </main>
  );
};

export default Form;
