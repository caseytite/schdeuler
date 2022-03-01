import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

const Form = (props) => {
  const { interviewers, onSave, onCancel} = props;

  const [student, setStudent] = useState(props.student || '');
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = (e) => {
    setStudent(() => setStudent(''));
    setInterviewer(() => setInterviewer(null));
  };

  const cancel = () => {
    reset();
    onCancel();
  };


  
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            value={student}
            placeholder={student || 'Enter Student Name'}
            onChange={(e) => setStudent(e.target.value)}
          />
        </form>
        <InterviewerList
          onChange={setInterviewer}
          interviewers={interviewers}
          value={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={() => cancel(student,interviewer)} danger>
            Cancel
          </Button>
          {!student || !interviewer && <Button confirm>Save</Button>}
          { student && interviewer && <Button onClick={() => onSave(student,interviewer)} confirm>
            Save
          </Button>}
        </section>
      </section>
    </main>
  );
};

export default Form;
