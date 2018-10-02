import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import events from './dummyEvents';

const localizer = BigCalendar.momentLocalizer(moment);

const currentUserEventsList = [{
  title: 'test',
  start: new Date(2018, 9, 2, 21),
  end: new Date(2018, 9, 2, 22, 30),
  allDay: false
},
{
  title: 'test',
  start: new Date(2018, 9, 4, 21),
  end: new Date(2018, 9, 4, 22, 30),
  allDay: false
}];

const CurrentUserSchedule = props => (
  <div>
    <BigCalendar
      localizer={localizer}
      events={events}
      startAcessor="start"
      endAccessor="end"
    />
  </div>
)

class Schedule extends React.Component {

  render() {
    return (
      <div>
        <CurrentUserSchedule />
      </div>
    )
  }
}

export default Schedule;