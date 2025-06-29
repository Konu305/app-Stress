import React, { Suspense } from 'react';
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
import { DiaryProvider } from './context/DiaryContext';
import { DiaryEntryDetail } from './components/DiaryEntryDetail';

// Lazy load PersonalStressAnalysis
const PersonalStressAnalysis = React.lazy(() => import('./pages/PersonalStressAnalysis'));

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
              <Route path="/personal-stress-analysis" element={
                <Suspense fallback={
                  <div className="min-h-screen bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 flex items-center justify-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#F6D98A] shadow-lg text-center">
                      <div className="w-12 h-12 border-4 border-[#4D5922] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-[#23412C]/70">Laden...</p>
                    </div>
                  </div>
                }>
                  <div className="min-h-screen bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30">
                    <PersonalStressAnalysis />
                  </div>
                </Suspense>
              } />
            </Routes>
          </main>
          <Navbar 
            items={[
              { icon: Heart, label: 'Startseite', path: '/' },
              { icon: Brain, label: 'Übungen', path: '/exercises' },
              { icon: Compass, label: 'Fortschritt', path: '/progress' },
              { icon: User, label: 'Profil', path: '/profile' },
            ]} 
          />
        </div>
      </BrowserRouter>
    </DiaryProvider>
  );
}

export default App;