import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold text-primary mb-4">Steticts</h3>
            <p className="text-gray-600 mb-4">
            O seu santuário de beleza e bem-estar. Estamos empenhados em realçar a sua beleza natural
            através de cuidados especializados e tratamentos de excelência.
            </p>
            <div className="flex space-x-4">
            
              <a href="https://www.instagram.com/sah_studio_design?igsh=OWxjc29ndDl3NDlu" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              
            </div>
          </div>

          <div>
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
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Rua Paraná 4050</li>
              <li>Sala 10</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Sah studio design. direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}