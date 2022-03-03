import React from 'react';

// displays the status of a booking, deletion or edit while "waiting" to hear back from the api

const Status = (props) => {
  const { message } = props;

  return (
    <main className="appointment__card appointment__card--status">
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">{message}</h1>
    </main>
  );
};

export default Status;
