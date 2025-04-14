import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Heart, Brain, Compass, User } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import Privacy from './pages/Privacy';
import Notifications from './pages/Notifications';
import Help from './pages/Help';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <main className="pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Navbar 
          items={[
            { icon: Heart, label: 'Home', path: '/' },
            { icon: Brain, label: 'Exercises', path: '/exercises' },
            { icon: Compass, label: 'Progress', path: '/progress' },
            { icon: User, label: 'Profile', path: '/profile' },
          ]} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;