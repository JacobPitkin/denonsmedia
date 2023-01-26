import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Games from './pages/Games';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
