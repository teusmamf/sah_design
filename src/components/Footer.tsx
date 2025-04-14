import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoFooter from '../assets/logo_footer.png';
import '../index.css';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Links Rápidos */}
          <div className='ml-60'>
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
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Rua Paraná 4050</li>
              <li>Sala 10</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Sah studio design. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
