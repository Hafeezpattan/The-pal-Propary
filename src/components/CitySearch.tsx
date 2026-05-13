import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const CitySearch: React.FC = () => {
  const cities = [
    { name: 'Dehradun', count: '1240+ Properties', img: 'https://images.unsplash.com/photo-1595066373752-6f9e31d7e2f5?auto=format&fit=crop&q=80&w=600' },
    { name: 'Haridwar', count: '450+ Properties', img: 'https://images.unsplash.com/photo-1627814421160-c3d0774a3f4e?auto=format&fit=crop&q=80&w=600' },
    { name: 'Rishikesh', count: '320+ Properties', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=600' },
    { name: 'Mussoorie', count: '180+ Properties', img: 'https://images.unsplash.com/photo-1595155913904-7a3038622c1d?auto=format&fit=crop&q=80&w=600' },
    { name: 'Delhi NCR', count: '850+ Properties', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Cities We Cover</h2>
          <p className="text-gray-500">Explore premium properties in top locations across Uttarakhand and beyond</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {cities.map((city, idx) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={city.img} 
                alt={city.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-gold mb-1">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{city.count}</span>
                </div>
                <h4 className="text-xl font-bold text-white">{city.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitySearch;
