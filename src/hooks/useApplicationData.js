import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {

  const spotsRemaining = (state, day) => {
    const appointmentsForDay = state.days.find((item) => {
      return item.name === day;
    });
    const appointments = appointmentsForDay.appointments;
    const length = appointments.filter(
      (apt) => !state.appointments[apt].interview
    );
    const spotsLeft = length.length
    const newDays = {...state.days}
    console.log(newDays);
  
    for(const day in newDays){
     console.log(day);
     if(state.day === newDays[day].name){
      newDays[day].spots = spotsLeft
      
     }
    }  
    
    
  };
  

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
    
    const setDay = (day) => setState((prev) => ({ ...prev, day }));
    
    const bookInterview = (id, interview) => {
    // spotsRemaining(state,state.days)
    // spotsRemaining(state, state.day)
    spotsRemaining(state, state.day)
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
     spotsRemaining(state, state.day)
   
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


  return{state, setDay, bookInterview, cancelInterview}
}

export default useApplicationData;