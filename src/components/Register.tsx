import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle, User } from 'lucide-react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { analytics } from '../lib/firebase';

interface RegisterProps {
  onClose: () => void;
  onLoginClick: () => void;
}

const Register: React.FC<RegisterProps> = ({ onClose, onLoginClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedPrivacy) {
      setError('Bitte akzeptieren Sie die Datenschutzerklärung');
      return;
    }

    if (password !== confirmPassword) {
      setError('Die Passwörter stimmen nicht überein');
      return;
    }

    if (password.length < 6) {
      setError('Das Passwort muss mindestens 6 Zeichen lang sein');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (err) {
      setError('Registrierung fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Registrieren</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Passwort
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Passwort bestätigen
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacy"
              checked={acceptedPrivacy}
              onChange={(e) => setAcceptedPrivacy(e.target.checked)}
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
              Ich akzeptiere die{' '}
              <a
                href="/privacy"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzerklärung
              </a>{' '}
              und stimme der Verarbeitung meiner Daten gemäß DSGVO zu.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading || !acceptedPrivacy}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              loading || !acceptedPrivacy
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Wird registriert...' : 'Registrieren'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Bereits registriert?{' '}
            <button
              onClick={onLoginClick}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Jetzt anmelden
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register; 