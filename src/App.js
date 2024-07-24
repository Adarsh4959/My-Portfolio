// src/App.js
import React from 'react';
import Header from './components/Header'; // Ensure this path is correct
import './App.css'; // Import your consolidated styles
import About from './components/About';
import logo from './logo.png';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <main>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </main>
    </div>
  );
}

export default App;
