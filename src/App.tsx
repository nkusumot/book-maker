import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* 他のルート... */}
        </Routes>
      </Router>
  );
};

export default App;
