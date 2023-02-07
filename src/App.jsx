import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Games from './pages/Games';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Navbar from './components/Navbar';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
