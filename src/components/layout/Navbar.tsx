import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lightbulb } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const accountLinks = user
    ? [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Logout', path: '#', onClick: logout }
      ]
    : [
        { name: 'Login', path: '/login' },
        { name: 'Sign Up', path: '/signup' }
      ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Lightbulb className="h-8 w-8 text-primary-700" />
          <span className="font-bold text-xl text-gray-900">IFA FOUNDATION</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <span className="mx-2 h-6 w-px bg-gray-200" />
          
          {accountLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={link.onClick}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {user && (
            <div className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
              {user.name}
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fadeDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="my-2 border-t border-gray-200" />
            
            {accountLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={link.onClick}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {user && (
              <div className="mx-3 my-2 px-3 py-1 bg-gray-100 rounded-full text-sm font-medium inline-block">
                {user.name}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;