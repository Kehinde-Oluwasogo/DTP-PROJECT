import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import AuthForm from './AuthForm';
import { useAppContext } from '../context/AppContext';

const LandingPage = () => {
  const { setCurrentView } = useAppContext();

  const handleBackToHomepage = () => {
    setCurrentView('homepage');
  };

  // Chatbot demo state
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am your T-levels info bot. Ask me anything about T-levels!' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, chatOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: 'user', text: input }
    ]);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: 'T-levels are 2-year courses designed for 16-19 year olds, combining classroom learning with industry placements. They are equivalent to 3 A-levels and focus on technical skills for specific careers. Want to know more?' }
      ]);
    }, 600);
    setInput('');
  };

  return (
    <div className="landing-container">
      <div className="landing-header">
        <button className="back-to-homepage-btn" onClick={handleBackToHomepage}>
          ← Back to Homepage
        </button>
        <h1>Welcome to Ada National College</h1>
        <p>Please login or create your account to continue</p>
      </div>
      <AuthForm />

      {/* Chatbot Portal: ensures fixed to viewport, not container */}
      {createPortal(
        <>
          <button
            className="chatbot-fab"
            aria-label="Open chat bot"
            onClick={() => setChatOpen((open) => !open)}
          >
            <svg width="60" height="60" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#4b51a2" />
              <path d="M8 11C8 9.89543 8.89543 9 10 9H22C23.1046 9 24 9.89543 24 11V17C24 18.1046 23.1046 19 22 19H14L10 22V19H10C8.89543 19 8 18.1046 8 17V11Z"
                fill="#fff" />
              <circle cx="12" cy="14" r="1" fill="#4b51a2" />
              <circle cx="16" cy="14" r="1" fill="#4b51a2" />
              <circle cx="20" cy="14" r="1" fill="#4b51a2" />
            </svg>
          </button>
          <p className="t-le2"> Trouble logging in <br /> or Signing up?</p>
          {chatOpen && (
            <div className="chatbot-popup">
              <div className="chatbot-header">
                <span>T-levels Info Bot</span>
                <button className="chatbot-close" onClick={() => setChatOpen(false)}>&times;</button>
              </div>
              <div className="chatbot-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`chatbot-msg chatbot-msg-${msg.from}`}>{msg.text}</div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <form className="chatbot-input-row" onSubmit={handleSend}>
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask about T-levels..."
                  autoFocus
                />
                <button type="submit">Send</button>
              </form>
            </div>
          )}
        </>,
        document.body
      )}
    </div>
  );
};

export default LandingPage;
