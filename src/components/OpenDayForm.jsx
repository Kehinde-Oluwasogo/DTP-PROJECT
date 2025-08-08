import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const OpenDayForm = () => {
  const { addOpenDay } = useAppContext();
  const [formData, setFormData] = useState({
    event_name: '',
    description: '',
    date: '',
    location: ''
  });
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const eventData = {
      ...formData,
      date: new Date(formData.date).toISOString()
    };
    
    addOpenDay(eventData);
    
    // Reset form
    setFormData({
      event_name: '',
      description: '',
      date: '',
      location: ''
    });
    
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <h3>Add New Open Day Event</h3>
      
      {success && (
        <div style={{ 
          backgroundColor: '#d4edda', 
          border: '1px solid #c3e6cb',
          borderRadius: '4px',
          padding: '15px',
          marginBottom: '20px',
          color: '#155724'
        }}>
          Open Day event added successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="event_name">Event Name *</label>
          <input
            type="text"
            id="event_name"
            name="event_name"
            value={formData.event_name}
            onChange={handleInputChange}
            required
            placeholder="e.g., Computer Science Open Day"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            placeholder="Describe what visitors can expect at this event"
            rows="4"
            style={{ 
              padding: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date and Time *</label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            min={today}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            placeholder="e.g., Main Campus, Building A, Room 101"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Open Day Event
        </button>
      </form>
    </div>
  );
};

export default OpenDayForm;
