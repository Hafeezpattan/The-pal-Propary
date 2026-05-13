import React from 'react';
import { Home, Key, Briefcase, Map as MapIcon, Construction, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Categories: React.FC = () => {
  const categories = [
    { icon: <Home />, name: 'Residential Flats', count: '1200+ listings', color: 'bg-blue-50 text-blue-600' },
    { icon: <Key />, name: 'Rental Homes', count: '600+ listings', color: 'bg-green-50 text-green-600' },
    { icon: <Briefcase />, name: 'Workspaces', count: '180+ offices', color: 'bg-purple-50 text-purple-600' },
    { icon: <MapIcon />, name: 'Open Plots', count: '90+ lands', color: 'bg-orange-50 text-orange-600' },
    { icon: <Construction />, name: 'Builder Projects', count: '25+ launches', color: 'bg-red-50 text-red-600' },
    { icon: <ShoppingBag />, name: 'Commercial Shops', count: '140+ spaces', color: 'bg-gold-pale text-gold' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Explore by Category</h2>
            <p className="text-gray-500">Find exactly what you need with our specialized categories</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all">
            View All Categories <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gold hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className={`w-14 h-14 ${cat.color} rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                {React.cloneElement(cat.icon as React.ReactElement, { className: 'w-7 h-7' })}
              </div>
              <h3 className="font-bold text-navy mb-1">{cat.name}</h3>
              <p className="text-xs text-gray-400 font-medium mb-4">{cat.count}</p>
              <div className="flex items-center gap-1 text-[10px] font-bold text-gray-300 group-hover:text-gold transition-colors">
                EXPLORE <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
