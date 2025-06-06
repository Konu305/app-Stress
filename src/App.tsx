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
import DiaryPage from './pages/DiaryPage';
import DiaryOverview from './pages/DiaryOverview';
import Analytics from './pages/Analytics';
import PersonalStressAnalysis from './pages/PersonalStressAnalysis';
import { DiaryProvider } from './context/DiaryContext';
import { DiaryEntryDetail } from './components/DiaryEntryDetail';

function App() {
  return (
    <DiaryProvider>
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
              <Route path="/diary" element={<DiaryPage />} />
              <Route path="/diary-overview" element={<DiaryOverview />} />
              <Route path="/diary-entry/:id" element={<DiaryEntryDetail />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/personal-stress-analysis" element={<PersonalStressAnalysis />} />
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
    </DiaryProvider>
  );
}

export default App;