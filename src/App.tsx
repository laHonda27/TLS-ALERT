import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Subscribe from './pages/Subscribe';
import Auth from './pages/Auth';
import SubscriptionSuccess from './pages/SubscriptionSuccess';
import { AnimatedGradientBackground } from './components/AnimatedGradientBackground';

function App() {
  return (
    <>
      <AnimatedGradientBackground />
      <div className="relative min-h-screen text-gray-100">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/subscription-success" element={<SubscriptionSuccess />} />
          </Routes>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1C1C3B',
                color: '#fff',
              },
            }}
          />
        </Router>
      </div>
    </>
  );
}

export default App;