import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Analysis from './Home/analysis';
import ChannelAnalysis from './Home/channelAnalysis'; // new import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/channelAnalysis" element={<ChannelAnalysis />} /> {/* new route */}
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
