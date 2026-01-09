import React, { useState } from 'react';
import { Menu, X, UserCircle2, PenTool } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleGoogleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulación de login con Google
    alert("Redirigiendo a Google Accounts para iniciar sesión...");
    console.log("Iniciando proceso de OAuth con Google...");
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-opacity-90 bg-[#020617] backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-brand-gradientStart to-brand-gradientEnd p-2 rounded-lg group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                 <PenTool className="text-white w-6 h-6" />
              </div>
              <span className="text-white font-display font-bold text-xl tracking-tight">RedactaRápido</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Características</a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Demo</a>
              <a href="#reviews" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Opiniones</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Precios</a>
            </div>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={handleGoogleLogin}
              className="bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <UserCircle2 className="w-5 h-5" />
              <span>¡Comenzar ahora!</span>
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a onClick={handleLinkClick} href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Características</a>
            <a onClick={handleLinkClick} href="#demo" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Demo</a>
            <a onClick={handleLinkClick} href="#reviews" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Opiniones</a>
            <a onClick={handleLinkClick} href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Precios</a>
            <button 
              onClick={(e) => { handleLinkClick(); handleGoogleLogin(e); }}
              className="w-full text-center mt-4 bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2"
            >
              <UserCircle2 className="w-5 h-5" />
              ¡Comenzar ahora!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;