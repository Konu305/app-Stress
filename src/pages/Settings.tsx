import React, { useState } from 'react';
import { ChevronLeft, Settings as SettingsIcon, Moon, Sun, Volume2, Bell, Globe, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [language, setLanguage] = useState('de');

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
          <h1 className="text-2xl font-bold text-gray-900">Einstellungen</h1>
          <p className="text-gray-600">Passen Sie die App an Ihre Bedürfnisse an</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 mb-8">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <SettingsIcon className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-blue-900">
              Hier können Sie grundlegende App-Einstellungen anpassen und verwalten.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3 mb-3">
            <Sun className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold text-gray-900">Erscheinungsbild</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Dark Mode</p>
                <p className="text-sm text-gray-600">Dunkles Erscheinungsbild</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3 mb-3">
            <Volume2 className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold text-gray-900">Audio</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Sound-Effekte</p>
                <p className="text-sm text-gray-600">Akustisches Feedback</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={soundEnabled}
                  onChange={(e) => setSoundEnabled(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3 mb-3">
            <Globe className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold text-gray-900">Sprache</h2>
          </div>
          <div className="space-y-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="de">Deutsch</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3 mb-3">
            <Lock className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold text-gray-900">Sicherheit</h2>
          </div>
          <div className="space-y-4">
            <button 
              onClick={() => navigate('/privacy')}
              className="w-full text-left flex items-center justify-between py-2 hover:text-blue-600"
            >
              <span>Datenschutzeinstellungen</span>
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </button>
            <button 
              onClick={() => navigate('/notifications')}
              className="w-full text-left flex items-center justify-between py-2 hover:text-blue-600"
            >
              <span>Benachrichtigungen</span>
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;