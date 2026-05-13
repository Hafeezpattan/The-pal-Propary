import React from 'react';
import { Home, PhoneCall, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const LeadBanner: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-navy rounded-[32px] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Have a Property? <br />
              <span className="text-gold">List It FREE</span> on The Property Pal
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0">
              Reach 50,000+ genuine buyers and tenants every month. Get the best value for your real estate assets.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="btn-primary flex items-center justify-center gap-2 py-4 px-8 text-lg">
              <Home className="w-5 h-5" />
              List Your Property — Free
            </button>
            <button className="bg-white/10 text-white font-bold py-4 px-8 rounded-md flex items-center justify-center gap-2 hover:bg-white/20 transition-all border border-white/10">
              <PhoneCall className="w-5 h-5 text-gold" />
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadBanner;
