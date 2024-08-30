// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend's API endpoint
    fetch('/api/message') // Using the defined API route
      .then((response) => response.text())
      .then((data) => {
        setMessage(data); // Set the message state with the response data
      })
      .catch((error) => {
        console.error('Error fetching data from backend:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p> {/* Display the fetched message */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
