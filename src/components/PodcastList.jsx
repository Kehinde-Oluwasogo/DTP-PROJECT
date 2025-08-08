import React from 'react';
import { useAppContext } from '../context/AppContext';

const PodcastList = () => {
  const { podcasts } = useAppContext();

  const handlePlay = (podcast) => {
    // In a real app, this would integrate with an audio player
    alert(`Playing: ${podcast.title}\n\nThis is a demo - audio file would play from: ${podcast.url}`);
  };

  return (
    <div>
      <h3>Available Podcasts</h3>
      <div className="podcast-list">
        {podcasts.map(podcast => (
          <div key={podcast.id} className="podcast-card">
            <h4>{podcast.title}</h4>
            <p>{podcast.description}</p>
            <div style={{ marginTop: '15px' }}>
              <button 
                className="btn btn-primary"
                onClick={() => handlePlay(podcast)}
              >
                ▶ Play
              </button>
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
              Added: {new Date(podcast.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
        {podcasts.length === 0 && (
          <p>No podcasts available yet.</p>
        )}
      </div>
    </div>
  );
};

export default PodcastList;
