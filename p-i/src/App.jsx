// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChatApp from './pages/app/main'
import Login from './pages/login/main'
import Signup from './pages/signup/main'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Preloader = () => {
  const ZoomTransition = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100vh;
    color:#fff;
    background-color: #7D8D7E;
`;

  return (
    <ZoomTransition className="preloader">
      <div className="spinner"></div>
      <h1>Welcome to PassionAI 😌</h1>
    </ZoomTransition>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading duration (e.g., for fetching data or preparing app)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ChatApp />} />
      </Routes>
    </Router>
  )
}

export default App
