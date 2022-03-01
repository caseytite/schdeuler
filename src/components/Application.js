import React, { useState, useEffect } from 'react';

import 'components/Application.scss';
import DayList from './DayList';

import Appointment from './Appointment';

import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from 'helpers/selectors';
import useApplicationData from 'hooks/useApplicationData';

export default function Application(props) {
  const { state, setDay, bookInterview, cancelInterview } =
    useApplicationData();


  const interviewersForDay = getInterviewersForDay(state, state.day);

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const appointmentArr = dailyAppointments.map((apt) => {
    if (!apt) {
      return null;
    }

    const interview = getInterview(state, apt.interview);

    return (
      <Appointment
        key={apt.id}
        id={apt.id}
        time={apt.time}
        interview={interview}
        interviewersForDay={interviewersForDay}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList allDays={state.days} value={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentArr}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
