import React from 'react';

//shows the appointment time and a horizontal rule

const Header = (props) => {
  const { time } = props;

  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
};

export default Header;
