import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Eye, EyeOff, Loader2, Lock, Mail, User } from 'lucide-react';

interface RegistrationProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ValidationState {
  username: boolean | null;
  email: boolean | null;
  password: boolean | null;
}

const Registration: React.FC<RegistrationProps> = ({ isOpen, onClose }) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [validation, setValidation] = useState<ValidationState>({
    username: null,
    email: null,
    password: null,
  });

  const validateUsername = (username: string): boolean => {
    const isValid = username.length >= 3 && 
                   username.length <= 30 && 
                   !username.includes('@') &&
                   /^[a-zA-Z0-9_-]+$/.test(username);
    setValidation(prev => ({ ...prev, username: isValid }));
    return isValid;
  };

  const validateEmail = (email: string): boolean => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setValidation(prev => ({ ...prev, email: isValid }));
    return isValid;
  };

  const validatePassword = (password: string): boolean => {
    const isValid = password.length >= 8 &&
                   /[A-Z]/.test(password) &&
                   /[a-z]/.test(password) &&
                   /[0-9]/.test(password);
    setValidation(prev => ({ ...prev, password: isValid }));
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username")?.toString().trim() || '';
    const email = formData.get("email")?.toString().trim() || '';
    const password = formData.get("password")?.toString() || '';

    if (!username || !email || !password) {
      setError('Alle Felder sind erforderlich');
      setLoading(false);
      return;
    }

    if (!validateUsername(username)) {
      setError('Ungültiger Benutzername');
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError('Ungültige E-Mail-Adresse');
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError('Das Passwort erfüllt nicht die Anforderungen');
      setLoading(false);
      return;
    }

    if (!acceptedTerms) {
      setError('Bitte akzeptieren Sie die Nutzungsbedingungen');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registrierung fehlgeschlagen');
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };

  const getInputClassName = (validationState: boolean | null) => {
    const baseClasses = "w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none transition-colors duration-200";
    if (validationState === null) return `${baseClasses} border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500`;
    if (validationState) return `${baseClasses} border-green-500 bg-green-50`;
    return `${baseClasses} border-red-500 bg-red-50`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative animate-fade-in">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Registrierung</h2>
          <p className="text-gray-600 mt-1">Erstellen Sie Ihr kostenloses Konto</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 rounded-lg flex items-center gap-2 text-red-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-4 p-4 bg-green-50 rounded-lg flex items-center gap-2 text-green-700">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <p>Registrierung erfolgreich!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Benutzername
            </label>
            <div className="relative">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="username"
                name="username"
                required
                className={getInputClassName(validation.username)}
                placeholder="max123"
                onChange={(e) => validateUsername(e.target.value)}
              />
              {validation.username !== null && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {validation.username ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-500">
              3-30 Zeichen, nur Buchstaben, Zahlen, - und _
            </p>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                id="email"
                name="email"
                required
                className={getInputClassName(validation.email)}
                placeholder="max@beispiel.de"
                onChange={(e) => validateEmail(e.target.value)}
              />
              {validation.email !== null && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {validation.email ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Passwort
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                minLength={8}
                className={getInputClassName(validation.password)}
                placeholder="••••••••"
                onChange={(e) => validatePassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <ul className="mt-1 text-sm text-gray-500 list-disc list-inside">
              <li>Mindestens 8 Zeichen</li>
              <li>Mindestens ein Großbuchstabe</li>
              <li>Mindestens ein Kleinbuchstabe</li>
              <li>Mindestens eine Zahl</li>
            </ul>
          </div>

          <div className="flex items-start gap-2 mt-4">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              Ich akzeptiere die{' '}
              <a href="/terms" className="text-blue-600 hover:underline">Nutzungsbedingungen</a>
              {' '}und die{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">Datenschutzerklärung</a>
            </label>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              disabled={loading || !acceptedTerms}
              className={`flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2
                ${loading || !acceptedTerms ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Wird registriert...
                </>
              ) : (
                'Registrieren'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;