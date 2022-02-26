
export function getAppointmentsForDay(state, day){

  const appointmentsForDay = state.days.find(item => {
    return item.name === day
  })
  if(!appointmentsForDay){
    return []
  }
  return appointmentsForDay.appointments.map(day => state.appointments[day]) 
  
}


export function getInterview(state, apt_interview){

  if(!apt_interview){
    return null
  }

  const interviewerId = apt_interview.interviewer
  const interviewObj = state.interviewers[interviewerId]
  const interview = {'student':apt_interview.student, 'interviewer':interviewObj}

  return  interview 

} 

