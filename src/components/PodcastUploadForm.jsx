import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const PodcastUploadForm = () => {
  const { addPodcast } = useAppContext();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: ''
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
    
    // In a real app, you would upload the file and get a URL back
    const podcastData = {
      ...formData,
      url: formData.url || `https://example.com/${formData.title.toLowerCase().replace(/\s+/g, '-')}.mp3`
    };
    
    addPodcast(podcastData);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      url: ''
    });
    
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div>
      <h3>Upload New Podcast</h3>
      
      {success && (
        <div style={{ 
          backgroundColor: '#d4edda', 
          border: '1px solid #c3e6cb',
          borderRadius: '4px',
          padding: '15px',
          marginBottom: '20px',
          color: '#155724'
        }}>
          Podcast uploaded successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="title">Podcast Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            placeholder="Enter podcast title"
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
            placeholder="Enter podcast description"
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
          <label htmlFor="url">Audio File URL (optional)</label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            placeholder="https://example.com/audio.mp3 (or leave blank for demo URL)"
          />
          <small style={{ color: '#666', fontSize: '12px' }}>
            In a real application, you would upload an audio file here
          </small>
        </div>

        <button type="submit" className="btn btn-primary">
          Upload Podcast
        </button>
      </form>
    </div>
  );
};

export default PodcastUploadForm;
