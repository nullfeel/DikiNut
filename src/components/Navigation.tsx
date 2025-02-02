import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, History as HistoryIcon, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const location = useLocation();
  const { signOut } = useAuth();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3">
      <div className="max-w-md mx-auto px-4 flex justify-around">
        <Link
          to="/"
          className={`flex flex-col items-center ${
            location.pathname === '/' ? 'text-teal-600' : 'text-gray-600'
          }`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link
          to="/history"
          className={`flex flex-col items-center ${
            location.pathname === '/history' ? 'text-teal-600' : 'text-gray-600'
          }`}
        >
          <HistoryIcon className="h-6 w-6" />
          <span className="text-xs mt-1">History</span>
        </Link>

        <button
          onClick={() => signOut()}
          className="flex flex-col items-center text-gray-600"
        >
          <LogOut className="h-6 w-6" />
          <span className="text-xs mt-1">Logout</span>
        </button>
      </div>
    </nav>
  );
}