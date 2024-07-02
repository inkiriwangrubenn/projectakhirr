import React from 'react';
import Header from './components/Header/Header';  // import Header component
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';  // import Education component
import Contact from './components/Contact/Contact';  // import Contact component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
