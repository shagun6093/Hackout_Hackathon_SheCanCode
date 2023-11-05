import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

function TrackCalendar() {
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState('');
  const [events, setEvents] = useState([]);

  const handleDateClick = (value) => {
    setDate(value);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, { date: date, event: event }]);
    setEvent('');
  };

  return (
    <div className='app'>
      <form onSubmit={handleEventSubmit}>
        <input
          type='text'
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder='Enter Event'
        />
        <button className='btn' type='submit'>Add Event</button>
      </form>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={handleDateClick}
          tileContent={({ date, view }) => {
            if (view === 'month') {
              const eventForDate = events.find(
                (event) =>
                  event.date.toDateString() === date.toDateString()
              );
              return eventForDate && <div>{eventForDate.event}</div>;
            }
          }}
        />
      </div>
      
    </div>
  );
}

export default TrackCalendar;
