import React from 'react';
import { ChevronLeft, Shield, Lock, Eye, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto px-4 pt-6">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Datenschutz</h1>
          <p className="text-gray-600">Verwalten Sie Ihre Datenschutzeinstellungen</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 mb-8">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Shield className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-blue-900">
              Ihre Daten werden sicher verschlüsselt und nach den höchsten Datenschutzstandards verarbeitet.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3 mb-3">
            <Lock className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold text-gray-900">Datenzugriff</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Anonyme Nutzungsdaten</p>
                <p className="text-sm text-gray-600">Hilft uns die App zu verbessern</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3 mb-3">
            <Eye className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold text-gray-900">Sichtbarkeit</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Profilsichtbarkeit</p>
                <p className="text-sm text-gray-600">Nur für Sie sichtbar</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3 mb-3">
            <UserPlus className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold text-gray-900">Kontodaten</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full text-left text-red-600 font-medium">
              Konto löschen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;