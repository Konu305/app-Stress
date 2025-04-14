import React, { useState } from 'react';
import { Settings, Bell, Shield, HelpCircle, ChevronLeft, ChevronRight, LogOut, Info, Sparkles, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [showXPInfo, setShowXPInfo] = useState(false);

  const menuItems = [
    {
      icon: Settings,
      label: 'Einstellungen',
      description: 'App-Einstellungen verwalten',
      path: '/settings'
    },
    {
      icon: Bell,
      label: 'Benachrichtigungen',
      description: 'Benachrichtigungen verwalten',
      path: '/notifications'
    },
    {
      icon: Shield,
      label: 'Datenschutz',
      description: 'Datenschutzeinstellungen anpassen',
      path: '/privacy'
    },
    {
      icon: HelpCircle,
      label: 'Hilfe & Support',
      description: 'Hilfe und Kontakt',
      path: '/help'
    }
  ];

  const badges = [
    { id: 'mindfulness', emoji: '🌀', name: 'Achtsamkeits-Einsteiger', unlocked: true },
    { id: 'diary', emoji: '📔', name: 'Tagebuch-Held:in', unlocked: true },
    { id: 'relaxation', emoji: '🌿', name: 'Entspannungsmeister:in', unlocked: false },
    { id: 'thinking', emoji: '🔄', name: 'Flex-Denker:in', unlocked: true },
    { id: 'streak', emoji: '🔥', name: '7-Tage-Serie', unlocked: false },
    { id: 'reflection', emoji: '🎯', name: 'Selbstreflexion-Profi', unlocked: false }
  ];

  const dailyChallenge = {
    title: "Fülle heute dein Barometer aus",
    reward: "+10 XP",
    emoji: "🎯"
  };

  return (
    <div className="max-w-md mx-auto px-4 pt-6 pb-24">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profil</h1>
          <p className="text-gray-600">Verwalten Sie Ihr Konto</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900">Junis Ba</h2>
            <p className="text-gray-600">Junis.ba@example.com</p>
            <p className="text-sm text-gray-500">Mitglied seit März 2024</p>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">🎖️ Dein Fortschritt</h2>
          <button
            onClick={() => setShowXPInfo(true)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Info className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* XP Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-medium text-gray-900">Level 2</h3>
              <p className="text-sm text-gray-600">Du entwickelst mentale Stärke</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">120 / 200 XP</p>
              <p className="text-xs text-gray-500">bis zum nächsten Level</p>
            </div>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{ width: '60%' }}
            />
          </div>
        </div>

        {/* Growing Plant Animation */}
        <div className="relative h-32 mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl animate-bounce">🌱</div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <p className="text-sm text-center text-gray-600">
              Dein Baum wächst weiter – stark! 🌱
            </p>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="mb-8">
          <h3 className="font-medium text-gray-900 mb-4">Freigeschaltete Erfolge</h3>
          <div className="grid grid-cols-3 gap-4">
            {badges.map(badge => (
              <div
                key={badge.id}
                className={`aspect-square rounded-xl flex flex-col items-center justify-center p-2 ${
                  badge.unlocked
                    ? 'bg-blue-50 text-blue-900'
                    : 'bg-gray-50 text-gray-400'
                }`}
              >
                <span className="text-2xl mb-1">{badge.emoji}</span>
                <span className="text-xs text-center">
                  {badge.unlocked ? badge.name : '???'}
                </span>
                {!badge.unlocked && (
                  <span className="text-xs mt-1">Noch 2 Übungen</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Meine tägliche Challenge</h3>
            <span className="text-2xl">{dailyChallenge.emoji}</span>
          </div>
          <p className="text-lg font-medium mb-2">{dailyChallenge.title}</p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">{dailyChallenge.reward}</span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="w-full bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
            >
              <div className="bg-blue-100 p-2 rounded-lg">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-900">{item.label}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <button className="w-full bg-red-50 text-red-600 py-3 rounded-lg font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
          <LogOut className="w-5 h-5" />
          Abmelden
        </button>
      </div>

      {/* XP Info Modal */}
      {showXPInfo && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Wie sammle ich XP?</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span>Tagebuch-Eintrag</span>
                <span className="font-medium text-blue-600">+10 XP</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Übung abgeschlossen</span>
                <span className="font-medium text-blue-600">+15 XP</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Barometer genutzt</span>
                <span className="font-medium text-blue-600">+5 XP</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Modul abgeschlossen</span>
                <span className="font-medium text-blue-600">+50 XP</span>
              </div>
            </div>
            <button
              onClick={() => setShowXPInfo(false)}
              className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              Verstanden
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;