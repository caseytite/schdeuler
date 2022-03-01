import React, { useState, useEffect } from 'react';

import 'components/Application.scss';
import DayList from './DayList';

import Appointment from './Appointment';
import axios from 'axios';
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from 'helpers/selectors';

export default function Application() {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: [
      {
        id: 1,
        time: '12pm',
      },
      {
        id: 2,
        time: '1pm',
        interview: {
          student: 'Lydia Miller-Jones',
          interviewer: {
            id: 3,
            name: 'Sylvia Palmer',
            avatar: 'https://i.imgur.com/LpaY82x.png',
          },
        },
      },
      {
        id: 3,
        time: '2pm',
      },
      {
        id: 4,
        time: '3pm',
        interview: {
          student: 'Archie Andrews',
          interviewer: {
            id: 4,
            name: 'Cohana Roy',
            avatar: 'https://i.imgur.com/FK8V841.jpg',
          },
        },
      },
      {
        id: 5,
        time: '4pm',
      },
    ],

    interviewers: {},
  });

  useEffect(() => {
    const GET_DAYS = axios.get('api/days');
    const GET_APPOINTMENTS = axios.get('/api/appointments');
    const GET_INTERVIEWERS = axios.get('/api/interviewers');

    Promise.all([GET_DAYS, GET_APPOINTMENTS, GET_INTERVIEWERS]).then(
      (response) => {
        const [days, appointments, interviewers] = response;

        setState((prev) => ({
          ...prev,
          days: days.data,
          appointments: appointments.data,
          interviewers: interviewers.data,
        }));
      }
    );
  }, []);

  // const setDay = day => setState({ ...state, day });
  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  const interviewersForDay = getInterviewersForDay(state, state.day);

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  // console.log('dailypts' ,dailyAppointments);
  // const appointmentArr = dailyAppointments.map(apt => <Appointment key={apt.id} {...apt} />)

  const bookInterview = (id, interview) => {
    console.log('apt id interview obj', id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments,
        });
      })
      
  };

  const cancelInterview = (id) => {
   
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments,
        });
      })
   
  };

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
