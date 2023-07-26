import React from 'react'
import './App.css'
import Counter from './components/Counter'
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      <Counter/>
      <Greet name="Luis"> 
        <p> children paragraph </p>
      </Greet>
    </div>
  );
}

export default App;
