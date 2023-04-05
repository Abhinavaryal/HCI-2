import React, { useState } from 'react';
import axios from 'axios';

const OpenAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  // Function to handle opening/closing of the pop-up window
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Function to send user messages to ChatGPT API and receive responses
  const handleSendMessage = async (message) => {
    // Send user message to ChatGPT API
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      messages: [
        { role: 'system', content: 'You are a user' },
        { role: 'user', content: message },
      ],
    });

    // Extract and store ChatGPT's response
    const chatbotResponse = response.data.choices[0].text;
    setChatMessages([...chatMessages, { role: 'chatbot', content: chatbotResponse }]);
  };

  return (
    <div className="chatbot-popup">
      {/* Render button for opening/closing the pop-up window */}
      <button className="chatbot-toggle-button" onClick={toggleChatbot}>
        Chat with ChatGPT
      </button>

      {/* Render the chat window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Render the chat messages */}
          <div className="chat-messages">
            {chatMessages.map((message, index) => (
              <div key={index} className={`chat-message ${message.role}`}>
                {message.content}
              </div>
            ))}
          </div>

          {/* Render the chat input */}
          <input
            className="chat-input"
            placeholder="Type your message..."
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSendMessage(event.target.value);
                event.target.value = '';
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default OpenAI;
