import React from 'react';
import { Twitter, Youtube, Instagram, Mail, PenTool } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-brand-gradientStart to-brand-gradientEnd w-8 h-8 flex items-center justify-center rounded-md shadow-lg shadow-cyan-900/20">
                 <PenTool className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">RedactaRápido</h3>
            </div>
            <p className="text-gray-400 text-sm">
              La inteligencia artificial que escribirá el futuro de tu negocio.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Tu email..." 
                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-500"
              />
              <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 rounded-lg text-sm transition-colors">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 RedactaRápido AI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;