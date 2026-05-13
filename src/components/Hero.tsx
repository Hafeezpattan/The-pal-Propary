import React, { useState } from 'react';
import { Search, MapPin, Building, IndianRupee, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('BUY');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#D4A843_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-12"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Discover Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                Dream Property
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-0 opacity-90">
              1,000+ verified listings across residential, commercial & open lands
            </p>
          </motion.div>

          {/* Search Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-2 rounded-2xl shadow-2xl w-full max-w-4xl"
          >
            {/* Tabs */}
            <div className="flex px-4 pt-2">
              {['BUY', 'RENT', 'COMMERCIAL', 'PLOTS'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 text-[13px] font-bold transition-all border-b-2 ${
                    activeTab === tab ? 'border-gold text-navy opacity-100' : 'border-transparent text-gray-400 opacity-60 hover:opacity-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto] gap-0 p-3 items-center">
              <div className="px-4 border-r border-gray-100">
                <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Location</label>
                <input 
                  type="text" 
                  defaultValue="Rajpur Road, Dehradun"
                  placeholder="City or Locality"
                  className="w-full text-sm font-medium focus:outline-none placeholder:text-gray-300"
                />
              </div>
              
              <div className="px-4 border-r border-gray-100">
                <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Type</label>
                <input 
                  type="text" 
                  defaultValue="2BHK Apartments"
                  placeholder="Select Type"
                  className="w-full text-sm font-medium focus:outline-none placeholder:text-gray-300"
                />
              </div>

              <div className="px-4 border-r border-gray-100">
                <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">BHK</label>
                <input 
                  type="text" 
                  defaultValue="2, 3 BHK"
                  placeholder="Select BHK"
                  className="w-full text-sm font-medium focus:outline-none placeholder:text-gray-300"
                />
              </div>

              <div className="px-4">
                <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">Budget</label>
                <input 
                  type="text" 
                  defaultValue="₹45L - ₹85L"
                  placeholder="Select Budget"
                  className="w-full text-sm font-medium focus:outline-none placeholder:text-gray-300"
                />
              </div>

              <button className="bg-gold text-white px-8 py-3.5 rounded-lg font-bold hover:bg-gold-light transition-all flex items-center justify-center gap-2">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
