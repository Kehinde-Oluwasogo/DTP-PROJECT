import React from 'react';
import { useAppContext } from '../context/AppContext';

const OpenDayList = () => {
  const { openDays } = useAppContext();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date();
  };

  return (
    <div>
      <h3>Open Day Events</h3>
      <div className="openday-list">
        {openDays.map(event => (
          <div key={event.id} className="openday-card">
            <h4>{event.event_name}</h4>
            <p>{event.description}</p>
            <div style={{ marginTop: '10px' }}>
              <strong>📅 Date:</strong> {formatDate(event.date)}
            </div>
            <div style={{ marginTop: '5px' }}>
              <strong>📍 Location:</strong> {event.location}
            </div>
            <div style={{ 
              marginTop: '10px', 
              padding: '5px 10px', 
              borderRadius: '4px',
              backgroundColor: isUpcoming(event.date) ? '#d4edda' : '#f8d7da',
              color: isUpcoming(event.date) ? '#155724' : '#721c24',
              fontSize: '14px'
            }}>
              {isUpcoming(event.date) ? '🟢 Upcoming' : '🔴 Past Event'}
            </div>
          </div>
        ))}
        {openDays.length === 0 && (
          <p>No open day events scheduled yet.</p>
        )}
      </div>
    </div>
  );
};

export default OpenDayList;
