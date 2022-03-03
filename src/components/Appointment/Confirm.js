import React from 'react';
import Button from 'components/Button';

// Confirm component is displayed when the user asks to delete an interview

const Confirm = (props) => {
  const { message, onCancel,onDelete } = props;

  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{message}</h1>
      <section className="appointment__actions">
        <Button onClick={onCancel} danger>
          Cancel
        </Button>
        <Button onClick={onDelete} danger>
          Confirm
        </Button>
      </section>
    </main>
  );
};

export default Confirm;
