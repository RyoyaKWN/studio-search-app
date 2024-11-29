import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import StudioList from './components/StudioList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1>STUDIO SEARCH</h1>
      <Search />
      <Router>
        <Routes>
          <Route path='/' element={<StudioList/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
