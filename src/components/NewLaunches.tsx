import React from 'react';
import { ArrowRight, Calendar, Building } from 'lucide-react';
import { motion } from 'motion/react';

const NewLaunches: React.FC = () => {
  const projects = [
    {
      title: 'The Grand Residences',
      builder: 'Godrej Properties',
      location: 'Rajpur Road, Dehradun',
      price: '₹65L – ₹1.8Cr',
      config: '2, 3 & 4 BHK',
      possession: 'Dec 2026',
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Green Valley Enclave',
      builder: 'Ansal API',
      location: 'Mussoorie Diversion',
      price: '₹45L – ₹95L',
      config: '1, 2 & 3 BHK',
      possession: 'Ready to Move',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">New Launches</h2>
            <p className="text-gray-500">Be the first to own a space in Dehradun's most anticipated projects</p>
          </div>
          <button className="flex items-center gap-2 text-gold font-bold group">
            Explore All Projects <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row hover:shadow-lg transition-shadow"
            >
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                    <Building className="w-3 h-3" />
                    <span>By {project.builder}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-navy">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{project.location}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between border-b border-gray-50 pb-2">
                      <span className="text-sm font-medium text-gray-500">Config:</span>
                      <span className="text-sm font-bold text-navy">{project.config}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-50 pb-2">
                      <span className="text-sm font-medium text-gray-500">Price:</span>
                      <span className="text-sm font-bold text-gold">{project.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Possession:
                      </span>
                      <span className="text-sm font-bold text-navy">{project.possession}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full btn-secondary py-3 text-sm">
                  Get Callback
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewLaunches;
