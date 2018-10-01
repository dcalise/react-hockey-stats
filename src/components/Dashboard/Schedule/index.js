import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

const localizer = BigCalendar.momentLocalizer(moment);

const currentUserEventsList = [];

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