import React from 'react';
import { Search, Users, Key } from 'lucide-react';
import { motion } from 'motion/react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Search & Filter',
      desc: 'Browse 1000+ verified listings across Dehradun with our smart filters.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Connect with Seller',
      desc: 'Instantly connect with owners, builders or trusted agents for property visits.'
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: 'Move In / Close Deal',
      desc: 'Finalize the paperwork with our expert guidance and step into your new space.'
    }
  ];

  return (
    <section className="py-24 bg-navy text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-white">How It Works</h2>
          <p className="text-gray-400">Simple steps to find your perfect space with The Property Pal</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center relative z-10"
            >
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-gold/20 border-4 border-navy">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
