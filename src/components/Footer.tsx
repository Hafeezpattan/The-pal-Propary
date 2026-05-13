import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-navy-light">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gold p-1.5 rounded-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                THE PROPERTY <span className="text-gold">PAL</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dehradun's most trusted real estate platform. Find your perfect space to buy, rent, or grow your business.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-navy-light rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-light rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-light rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-light rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/buy" className="hover:text-white transition-colors">Buy Properties</Link></li>
              <li><Link to="/rent" className="hover:text-white transition-colors">Rent Flats & PGs</Link></li>
              <li><Link to="/commercial" className="hover:text-white transition-colors">Commercial Workspaces</Link></li>
              <li><Link to="/plots" className="hover:text-white transition-colors">Open Lands & Plots</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Real Estate Blog</Link></li>
            </ul>
          </div>

          {/* Types */}
          <div>
            <h4 className="text-gold font-bold mb-6">Property Types</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-white transition-colors">1BHK & 2BHK Flats</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Builder Floors</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Studio Apartments</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Retail Shops</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Office Spaces</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Agricultural Land</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>Rajpur Road, Near Jakhan, Dehradun, Uttarakhand - 248001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+919027389919" className="hover:text-white">+91 9027389919</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:hello@thepropertypal.in" className="hover:text-white">hello@thepropertypal.in</a>
              </li>
            </ul>
            <div className="mt-6">
              <button className="w-full btn-primary py-2.5">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 The Property Pal. All rights reserved. Managed by Local Experts.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms & Conditions</Link>
            <span className="text-gray-600">RERA Disclosure: UK-RERA-2025-001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
