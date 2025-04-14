import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Settings, Bell, Shield, HelpCircle, LogOut } from 'lucide-react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Settings, label: 'Einstellungen', path: '/settings' },
    { icon: Bell, label: 'Benachrichtigungen', path: '/notifications' },
    { icon: Shield, label: 'Datenschutz', path: '/privacy' },
    { icon: HelpCircle, label: 'Hilfe & Support', path: '/help' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-lg">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-gray-900">Menü</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <div className="p-4">
          <button
            onClick={() => {
              navigate('/profile');
              onClose();
            }}
            className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl mb-6 w-full hover:bg-gray-200 transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <h3 className="font-bold text-gray-900">Junis Ba</h3>
              <p className="text-sm text-gray-600">junis.ba@example.com</p>
            </div>
          </button>

          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    navigate(item.path);
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <button
              onClick={() => {
                // Handle logout
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Abmelden</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;