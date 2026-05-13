import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">What Our Clients Say</h2>
          <p className="text-gray-500">Real stories from people who found their perfect space with us</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-gray-50 rounded-3xl p-8 md:p-16 relative"
            >
              <div className="absolute top-8 left-8 text-gold/20">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="relative z-10 text-center">
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 fill-current ${i < TESTIMONIALS[index].rating ? 'text-gold' : 'text-gray-300'}`} />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-medium text-navy mb-10 italic leading-relaxed">
                  "{TESTIMONIALS[index].quote}"
                </p>
                
                <div>
                  <h4 className="text-lg font-bold text-navy">{TESTIMONIALS[index].name}</h4>
                  <p className="text-sm text-gray-500 font-medium">
                    {TESTIMONIALS[index].city} • {TESTIMONIALS[index].propertyType}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={prev}
              className="p-3 bg-white border border-gray-200 rounded-full hover:bg-navy hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${index === i ? 'bg-gold w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-3 bg-white border border-gray-200 rounded-full hover:bg-navy hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
