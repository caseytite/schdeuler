import React from 'react';

// Displays in the day slot with a button(image) to book an appointment

const Empty = (props) => {
  const { onAdd } = props;

  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={onAdd}
      />
    </main>
  );
};

export default Empty;
