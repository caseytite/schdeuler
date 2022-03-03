import React from 'react';
import './InterviewerListItem.scss';
import classNames from 'classnames';

// each interviewer item for a selected day, allows interviwers to be selected

const InterviewerListItem = (props) => {
  const { name, avatar, selected, setInterviewer } = props;

  const interviewerClass = classNames('interviewers__item', {
    'interviewers__item--selected': selected,
  });

  return (
    <li className={interviewerClass} onClick={setInterviewer}>
      <img className={'interviewers__item-image'} src={avatar} alt={name} />
      {selected && name}
    </li>
  );
};

export default InterviewerListItem;
