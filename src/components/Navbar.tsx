import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Building2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Buy', href: '/buy' },
    { name: 'Rent', href: '/rent' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'Plots', href: '/plots' },
    { name: 'New Projects', href: '/new-projects' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[70px] flex items-center ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-navy'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Building2 className="w-6 h-6 text-gold" strokeWidth={2.5} />
          <span className="text-xl font-extrabold tracking-tight text-white">
            THE PROPERTY <span className="text-gold">PAL</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-semibold transition-colors ${
                location.pathname === link.href ? 'text-gold' : 'text-white hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+919027389919" className="flex items-center gap-2 text-gold font-bold transition-colors">
            <span>+91 9027389919</span>
          </a>
          <button className="bg-gold text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-gold-light transition-all active:scale-95">Post Property</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-navy hover:text-gold"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-100" />
              <button className="btn-primary w-full">Post Property</button>
              <button className="btn-secondary w-full">Login / Signup</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
