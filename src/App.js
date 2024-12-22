import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import AddTask from './components/UpdateTask';
import UpdateTask from './components/UpdateTask';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<AddTask />} />
          <Route path="/update-task/:id" element={<UpdateTask />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
