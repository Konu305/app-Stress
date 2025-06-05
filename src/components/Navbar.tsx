import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface NavItem {
  icon: typeof LucideIcon;
  label: string;
  path: string;
}

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between py-2">
          {items.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center p-2 rounded-lg transition-colors font-semibold text-xs tracking-wide ${
                  isActive ? 'text-primary' : 'text-text/80 hover:text-primary'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;