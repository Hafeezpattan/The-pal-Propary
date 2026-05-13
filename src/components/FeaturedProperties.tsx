import React, { useState } from 'react';
import { DUMMY_PROPERTIES } from '../constants';
import PropertyCard from './PropertyCard';
import { motion, AnimatePresence } from 'motion/react';

const FeaturedProperties: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Buy' | 'Rent' | 'Sale'>('Buy');

  const filteredProperties = DUMMY_PROPERTIES.filter(p => p.listingType === activeTab).slice(0, 6);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-extrabold mb-4 text-navy">Featured Properties</h2>
            <p className="text-gray-500">Handpicked premium listings verified by our team for quality and value.</p>
          </div>
          <button className="text-gold font-bold flex items-center gap-2 text-sm hover:gap-3 transition-all">
            View All Properties <span>&rarr;</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-xl border border-gray-200">
            {['Buy', 'Rent'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-8 py-3 text-sm font-bold transition-all rounded-lg ${
                  activeTab === tab ? 'bg-white text-navy shadow-sm' : 'text-gray-500 hover:text-navy'
                }`}
              >
                For {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-16">
          <button className="btn-secondary px-10">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
