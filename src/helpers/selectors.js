
export function getAppointmentsForDay(state, day){

  const appointmentsForDay = state.days.find(item => {
    return item.name === day
  })
  if(!appointmentsForDay){
    return []
  }
  return appointmentsForDay.appointments.map(day => state.appointments[day]) 
  
}

