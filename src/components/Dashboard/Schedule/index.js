import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

const localizer = BigCalendar.momentLocalizer(moment);

const currentUserEventsList = [{
  title: 'test',
  start: new Date(2018, 9, 2),
  end: new Date(2018, 9, 3),
  allDay: false
},
{
  title: 'test',
  start: new Date(2018, 9, 4),
  end: new Date(2018, 9, 4),
  allDay: false
}];

const CurrentUserSchedule = props => (
  <div>
    <BigCalendar
      localizer={localizer}
      events={currentUserEventsList}
      startAcessor="start"
      endAccessor="end"
    />
  </div>
)

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CurrentUserSchedule />
      </div>
    )
  }
}

export default Schedule;