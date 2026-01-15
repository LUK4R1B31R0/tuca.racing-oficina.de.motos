import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants.tsx';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex flex-col leading-none group"
            >
              <span className="font-oswald text-2xl font-bold tracking-tighter text-white group-hover:text-red-500 transition-colors uppercase">
                Tuca<span className="text-red-600 group-hover:text-white">Racing</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Vinhedo - SP</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`px-3 py-2 rounded-xl text-sm font-bold transition-all uppercase tracking-widest ${
                    activeSection === item.id 
                      ? 'text-red-600' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block px-3 py-4 rounded-xl text-base font-bold uppercase tracking-wider transition-colors ${
                  activeSection === item.id 
                    ? 'bg-red-600 text-white' 
                    : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};