import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ResourceList from './components/ResourceList';
import Tips from './components/Tips';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<ResourceList />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
