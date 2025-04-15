import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoFooter from '../assets/logo_footer.png';
import '../index.css';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left">
  
  {/* Links Rápidos */}
  {/* Links Rápidos */}
<div className="flex flex-col items-center md:items-end text-center md:text-right">
  <h4 className="font-semibold text-gray-900 mb-4">Links Rápidos</h4>
  <ul className="space-y-2">
    <li>
      <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
        Home
      </Link>
    </li>
    <li>
      <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
        Serviços
      </Link>
    </li>
    <li>
      <a 
        href="https://www.instagram.com/sah_studio_design?igsh=OWxjc29ndDl3NDlu" 
        className="inline-block text-gray-400 hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={20} />
      </a>
    </li>
  </ul>
</div>


  {/* Logo centralizada */}
  <div className="flex justify-center">
    <img 
      src={logoFooter} 
      alt="logo_footer" 
      className="logo_footer h-20 object-contain"
    />
  </div>

  {/* Informações de contato */}
  <div className="flex flex-col items-center md:items-start">
    <h4 className="font-semibold text-gray-900 mb-4">Contato</h4>
    <ul className="space-y-2 text-gray-600">
      <li>Rua Paraná 4050</li>
      <li>Sala 10</li>
    </ul>
  </div>
</div>

    </footer>
  );
}
