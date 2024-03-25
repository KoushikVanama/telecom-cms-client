import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerRegistrationForm from './components/CustomerRegistrationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerRegistrationForm />} />
        <Route path="/plan-selection" element={<CustomerRegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
