import React from 'react';
import { ShieldCheck, Zap, PhoneCall, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: '100% Verified Listings',
      desc: 'Every property goes through a rigorous verification process by our local experts.'
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'Zero Brokerage Options',
      desc: 'Save thousands with myriads of direct owner-listed properties available for you.'
    },
    {
      icon: <PhoneCall className="w-10 h-10" />,
      title: 'Expert Guidance — Free',
      desc: 'Get professional advice on property valuation, documentation, and RERA compliance.'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Instant Owner Connect',
      desc: 'No more waiting! Get in touch with property owners instantly via WhatsApp or Call.'
    }
  ];

  return (
    <section className="py-24 bg-gold-pale/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Why Choose The Property Pal</h2>
          <p className="text-gray-500">The most trusted and transparent way to find real estate in Uttarakhand</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-20 h-20 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-8 text-gold">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold mb-4">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
