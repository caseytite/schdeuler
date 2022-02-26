export function getAppointmentsForDay(state, day) {
  const appointmentsForDay = state.days.find((item) => {
    return item.name === day;
  });
  if (!appointmentsForDay) {
    return [];
  }
  return appointmentsForDay.appointments.map((day) => state.appointments[day]);
}

export function getInterview(state, apt_interview) {
  if (!apt_interview) {
    return null;
  }

  const interviewerId = apt_interview.interviewer;
  const interviewObj = state.interviewers[interviewerId];
  const interview = {
    student: apt_interview.student,
    interviewer: interviewObj,
  };

  return interview;
}

// const state = {
//   days: [
//     {
//       id: 1,
//       name: "Monday",
//       appointments: [1, 2, 3],
//       interviewers: [1, 2]
//     },
//     {
//       id: 2,
//       name: "Tuesday",
//       appointments: [4, 5],
//       interviewers: [1, 2]
//     }
//   ],
//   appointments: {
//     "1": { id: 1, time: "12pm", interview: null },
//     "2": { id: 2, time: "1pm", interview: null },
//     "3": {
//       id: 3,
//       time: "2pm",
//       interview: { student: "Archie Cohen", interviewer: 2 }
//     },
//     "4": { id: 4, time: "3pm", interview: null },
//     "5": {
//       id: 5,
//       time: "4pm",
//       interview: { student: "Chad Takahashi", interviewer: 2 }
//     }
//   },
//   interviewers: {
//     "1": {
//       "id": 1,
//       "name": "Sylvia Palmer",
//       "avatar": "https://i.imgur.com/LpaY82x.png"
//     },
//     "2": {
//       id: 2,
//       name: "Tori Malcolm",
//       avatar: "https://i.imgur.com/Nmx0Qxo.png"
//     }
//   }
// };

export function getInterviewersForDay(state, day) {
  const interviewersArr = [];
  state.days.forEach((item) => {
    if (item.name === day) {
      interviewersArr.push(...item.interviewers);
    }
  });
  if (!state.days) return [];

  return interviewersArr.map((int) => state.interviewers[int]);
}
