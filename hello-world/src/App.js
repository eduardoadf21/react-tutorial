import React from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Greet name="Luis">
        <p> children props </p>
        <button> click me </button>
      </Greet>

      <Welcome name="Cooper"/>

      <Message></Message>
    </div>
  );
}

export default App;
