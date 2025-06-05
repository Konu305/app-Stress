import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle, User, Loader2, CheckCircle } from 'lucide-react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';

interface ZPPRegistrationProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick?: () => void;
}

const ZPPRegistration: React.FC<ZPPRegistrationProps> = ({ isOpen, onClose, onLoginClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  // Data protection consent states
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedDataProcessing, setAcceptedDataProcessing] = useState(false);
  const [acceptedMarketing, setAcceptedMarketing] = useState(false);

  // Validation states
  const [validation, setValidation] = useState({
    name: null as boolean | null,
    email: null as boolean | null,
    password: null as boolean | null,
  });

  const validateName = (name: string): boolean => {
    const isValid = name.length >= 2 && name.length <= 50;
    setValidation(prev => ({ ...prev, name: isValid }));
    return isValid;
  };

  const validateEmail = (email: string): boolean => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setValidation(prev => ({ ...prev, email: isValid }));
    return isValid;
  };

  const validatePassword = (password: string): boolean => {
    // ZPP requires strong passwords
    const isValid = password.length >= 8 &&
                   /[A-Z]/.test(password) &&
                   /[a-z]/.test(password) &&
                   /[0-9]/.test(password) &&
                   /[^A-Za-z0-9]/.test(password); // Special character
    setValidation(prev => ({ ...prev, password: isValid }));
    return isValid;
  };

  const handleRegister = async (e: React.FormEvent) => {
    console.log("handleRegister function started.");
    e.preventDefault();
    
    // Required consent checks
    if (!acceptedPrivacy || !acceptedTerms || !acceptedDataProcessing) {
      setError('Bitte akzeptieren Sie die erforderlichen Einwilligungen');
      return;
    }

    // Validation checks
    if (!validateName(name)) {
      setError('Bitte geben Sie einen gültigen Namen ein');
      return;
    }

    if (!validateEmail(email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein');
      return;
    }

    if (!validatePassword(password)) {
      setError('Das Passwort erfüllt nicht die Sicherheitsanforderungen');
      return;
    }

    if (password !== confirmPassword) {
      setError('Die Passwörter stimmen nicht überein');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      // Create user in Firebase Authentication
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Log immediately after user creation and before profile update
      console.log("User created, attempting profile update:", { userId: user.uid, name: name });

      // Update display name - Temporarily commented out for debugging Firestore write
      /*
      try { 
        await updateProfile(user, {
          displayName: name
        });
      } catch (profileError) {
        console.error("Error updating profile:", profileError);
      }
      */
      
      // Store user data in Firestore with consent information
      const db = getFirestore();
      const dataToSave = { 
        name,
        email,
        // --- Temporarily commented out for debugging ---
        // createdAt: serverTimestamp(), 
        // consentTimestamp: serverTimestamp(), 
        // consents: {
        //   privacy: acceptedPrivacy,
        //   terms: acceptedTerms,
        //   dataProcessing: acceptedDataProcessing,
        //   marketing: acceptedMarketing
        // },
        // registrationInfo: {
        //   timestamp: new Date().toISOString(),
        //   userAgent: navigator.userAgent,
        // }
        // --- End of temporarily commented out section ---
      };
      console.log("Attempting to save (simplified) to Firestore:", { userId: user.uid, data: dataToSave });

      // ---- Hinzugefügtes Logging ----
      console.log("Firestore: Writing data:", dataToSave);
      console.log("Firestore: For user:", auth.currentUser);
      // ---- Ende Hinzugefügtes Logging ----

      await setDoc(doc(db, "users", user.uid), dataToSave); 
      
      // Log registration event in analytics - Temporarily commented out due to linter error/potential issues
      // analytics.logEvent('sign_up', {
      //   method: 'email'
      // });
      
      // Call onClose immediately on success
      onClose();

    } catch (error: any) {
      // Handle specific Firebase errors
      if (error.code === 'auth/email-already-in-use') {
        setError('Diese E-Mail-Adresse wird bereits verwendet');
      } else if (error.code === 'auth/invalid-email') {
        setError('Ungültige E-Mail-Adresse');
      } else if (error.code === 'auth/weak-password') {
        setError('Das Passwort ist zu schwach');
      } else {
        setError('Bei der Registrierung ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
        console.error("Registration Error:", error);
      }
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
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative animate-fade-in max-h-[90vh] overflow-y-auto">
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

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="relative">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  validateName(e.target.value);
                }}
                required
                className={getInputClassName(validation.name)}
                placeholder="Max Mustermann"
              />
              {validation.name !== null && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {validation.name ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail-Adresse
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                required
                className={getInputClassName(validation.email)}
                placeholder="email@beispiel.de"
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
                required
                className={getInputClassName(validation.password)}
                placeholder="••••••••"
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
            <p className="mt-1 text-sm text-gray-500">
              Mindestens 8 Zeichen, mit Groß- und Kleinbuchstaben, Zahl und Sonderzeichen
            </p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Passwort bestätigen
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* ZPP compliant consent checkboxes */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">Datenschutz & Einwilligungen</h3>
            
            {/* Required consents */}
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  required
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Ich akzeptiere die{' '}
                  <a href="/terms" className="text-blue-600 hover:underline">Nutzungsbedingungen</a>*
                </label>
              </div>
              
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  required
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Ich habe die{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">Datenschutzerklärung</a>{' '}
                  gelesen und verstanden*
                </label>
              </div>
              
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="dataProcessing"
                  checked={acceptedDataProcessing}
                  onChange={(e) => setAcceptedDataProcessing(e.target.checked)}
                  required
                  className="mt-1"
                />
                <label htmlFor="dataProcessing" className="text-sm text-gray-600">
                  Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der Datenschutzerklärung zu*
                </label>
              </div>
              
              {/* Optional consents */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={acceptedMarketing}
                  onChange={(e) => setAcceptedMarketing(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="marketing" className="text-sm text-gray-600">
                  Ich möchte regelmäßig Neuigkeiten und personalisierte Angebote per E-Mail erhalten (optional)
                </label>
              </div>
              
              <p className="text-xs text-gray-500 mt-2">* Pflichtfelder</p>
            </div>
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
              disabled={loading}
              className={`flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2
                ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
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
          
          {onLoginClick && (
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Bereits registriert?{' '}
                <button
                  type="button"
                  onClick={onLoginClick}
                  className="text-blue-600 hover:underline"
                >
                  Hier anmelden
                </button>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ZPPRegistration; 