import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ContactBtn from './Contactbtn';
import logonav from '../assets/logosahnav.png';
import '../index.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Serviços' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center min-h-[4rem]">
      
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Link to="/" className="text-2xl font-semibold text-primary">
          <img 
            src={logonav} 
            alt="logonav" 
            className="logo_navbar"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`${
              isActive(link.path)
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            } transition-colors duration-200`}
          >
            {link.label}
          </Link>
        ))}
        <ContactBtn />
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    {isOpen && (
      <div className="md:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                isActive(link.path)
                  ? 'text-primary bg-primary/5'
                  : 'text-gray-600'
              } block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-primary/5`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200">
            Marcar agora!
          </button>
        </div>
      </div>
    )}
  </div>
</nav>

  );
}