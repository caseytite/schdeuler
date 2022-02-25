import React, {useState, useEffect} from "react";

import "components/Application.scss";
import DayList from "./DayList";
// import 'components/Appointment'
import Appointment from "./Appointment";
import axios from "axios";
import { getAppointmentsForDay } from "helpers/selectors";

export default function Application(props) {

  const [state,setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {appointments:[
      {
        id: 1,
        time: "12pm",
      },
      {
        id: 2,
        time: "1pm",
        interview: {
          student: "Lydia Miller-Jones",
          interviewer:{
            id: 3,
            name: "Sylvia Palmer",
            avatar: "https://i.imgur.com/LpaY82x.png",
          }
        }
      },
      {
        id: 3,
        time: "2pm",
      },
      {
        id: 4,
        time: "3pm",
        interview: {
          student: "Archie Andrews",
          interviewer:{
            id: 4,
            name: "Cohana Roy",
            avatar: "https://i.imgur.com/FK8V841.jpg",
          }
        }
      },
      {
        id: 5,
        time: "4pm",
      }
    ]}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day,)
  
  const GET_DAYS = axios.get('api/days')
  const GET_APPOINTMENTS = axios.get('/api/appointments')
  const GET_INTERVIEWERS = axios.get('/api/interviewers')

  useEffect(() => {

    Promise.all([GET_DAYS,GET_APPOINTMENTS,GET_INTERVIEWERS])
      .then((response) => {

        const [days, appointments,interviewers] = response
      
        setState(prev => ({
          ...prev,
          days: days.data,
          appointments: appointments.data,
          interviewers:interviewers.data
        }))
      })
  },[])

  const setDay = day => setState({ ...state, day });
      
  const appointmentArr = dailyAppointments.map(apt => <Appointment key={apt.id} {...apt} />)

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
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
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
