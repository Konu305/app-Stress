import React, { useState } from 'react';
import { Settings, Bell, Shield, HelpCircle, ChevronLeft, ChevronRight, LogOut, Info, Sparkles, Target, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [showXPInfo, setShowXPInfo] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

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
    <div className="max-w-md mx-auto px-4 pt-6 pb-24 bg-[#F6E3B6] min-h-screen">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={handleBack}
          className="flex items-center space-x-2 text-[#23412C] hover:text-[#4D5922] transition-colors bg-[#F2C75B] hover:bg-[#E6B84F] px-3 py-2 rounded-xl border-2 border-[#F6D98A] shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Zurück</span>
        </button>
        <div>
          <h1 className="text-2xl font-bold text-[#23412C]">Profil</h1>
          <p className="text-[#23412C] opacity-80">Verwalten Sie Ihr Konto</p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-[#F2C75B] rounded-2xl shadow-lg p-6 mb-6 border-2 border-[#F6D98A]">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-[#4D5922] flex items-center justify-center text-3xl text-white shadow-lg">
            👤
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#23412C]">Junis Ba</h2>
            <p className="text-[#23412C] opacity-80">Junis.ba@example.com</p>
            <p className="text-sm text-[#4D5922] font-medium">Mitglied seit März 2024</p>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-[#4D5922] rounded-2xl shadow-lg p-6 mb-6 border-2 border-[#F6D98A]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Dein Fortschritt
          </h2>
          <button
            onClick={() => setShowXPInfo(true)}
            className="p-2 hover:bg-[#F6D98A] hover:bg-opacity-20 rounded-xl transition-colors"
          >
            <Info className="w-5 h-5 text-[#F6D98A]" />
          </button>
        </div>

        {/* XP Progress */}
        <div className="mb-8 bg-white bg-opacity-10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-bold text-white text-lg">Level 2</h3>
              <p className="text-sm text-[#F6D98A]">Du entwickelst mentale Stärke</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-white">120 / 200 XP</p>
              <p className="text-xs text-[#F6D98A]">bis zum nächsten Level</p>
            </div>
          </div>
          <div className="w-full h-4 bg-[#F6D98A] bg-opacity-30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#F6D98A] rounded-full transition-all duration-700 shadow-sm"
              style={{ width: '60%' }}
            />
          </div>
        </div>

        {/* Growing Plant Animation */}
        <div className="relative h-32 mb-8 bg-white bg-opacity-10 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl animate-bounce mb-2">🌱</div>
            <p className="text-sm text-[#F6D98A] font-medium">
              Dein Baum wächst weiter – stark!
            </p>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="mb-6">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            Freigeschaltete Erfolge
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {badges.map(badge => (
              <div
                key={badge.id}
                className={`aspect-square rounded-xl flex flex-col items-center justify-center p-3 transition-all hover:scale-105 ${
                  badge.unlocked
                    ? 'bg-[#F2C75B] text-[#23412C] shadow-md'
                    : 'bg-white bg-opacity-10 text-[#F6D98A] opacity-50'
                }`}
              >
                <span className="text-2xl mb-1">{badge.emoji}</span>
                <span className="text-xs text-center font-medium">
                  {badge.unlocked ? badge.name : '???'}
                </span>
                {!badge.unlocked && (
                  <span className="text-xs mt-1 opacity-80">Noch 2 Übungen</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="bg-[#F2C75B] rounded-xl p-4 text-[#23412C] border-2 border-[#F6D98A]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold">Meine tägliche Challenge</h3>
            <span className="text-2xl">{dailyChallenge.emoji}</span>
          </div>
          <p className="text-lg font-bold mb-2">{dailyChallenge.title}</p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#4D5922]" />
            <span className="text-sm font-medium text-[#4D5922]">{dailyChallenge.reward}</span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-4 mb-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="w-full bg-[#F2C75B] rounded-2xl shadow-lg p-4 flex items-center gap-4 hover:bg-[#E6B84F] transition-all hover:shadow-xl border-2 border-[#F6D98A]"
            >
              <div className="bg-[#4D5922] p-3 rounded-xl">
                <Icon className="w-6 h-6 text-[#F6D98A]" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-[#23412C]">{item.label}</h3>
                <p className="text-sm text-[#23412C] opacity-80">{item.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#4D5922]" />
            </button>
          );
        })}
      </div>

      {/* Logout Button */}
      <div className="mt-8">
        <button className="w-full bg-white bg-opacity-20 text-[#23412C] py-4 rounded-2xl font-bold hover:bg-opacity-30 transition-all flex items-center justify-center gap-2 border-2 border-[#F6D98A] shadow-lg">
          <LogOut className="w-5 h-5" />
          Abmelden
        </button>
      </div>

      {/* XP Info Modal */}
      {showXPInfo && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#F2C75B] rounded-2xl w-full max-w-md p-6 border-2 border-[#F6D98A] shadow-2xl">
            <h3 className="text-xl font-bold text-[#23412C] mb-4 flex items-center gap-2">
              Wie sammle ich XP?
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between bg-white rounded-xl p-3 border-2 border-[#F6D98A]">
                <span className="text-[#23412C] font-medium">Tagebuch-Eintrag</span>
                <span className="font-bold text-[#4D5922]">+10 XP</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl p-3 border-2 border-[#F6D98A]">
                <span className="text-[#23412C] font-medium">Übung abgeschlossen</span>
                <span className="font-bold text-[#4D5922]">+15 XP</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl p-3 border-2 border-[#F6D98A]">
                <span className="text-[#23412C] font-medium">Barometer genutzt</span>
                <span className="font-bold text-[#4D5922]">+5 XP</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl p-3 border-2 border-[#F6D98A]">
                <span className="text-[#23412C] font-medium">Modul abgeschlossen</span>
                <span className="font-bold text-[#4D5922]">+50 XP</span>
              </div>
            </div>
            <button
              onClick={() => setShowXPInfo(false)}
              className="w-full bg-[#4D5922] text-white py-3 rounded-xl font-bold hover:bg-[#3A4219] transition-colors shadow-lg"
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