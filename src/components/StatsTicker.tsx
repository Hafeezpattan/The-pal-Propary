import React from 'react';

const StatsTicker: React.FC = () => {
  const stats = [
    { label: 'Listed Properties', value: '2,400+' },
    { label: 'Happy Clients', value: '850+' },
    { label: 'Cities Covered', value: '15+' },
    { label: 'Verified Sellers', value: '100%' },
  ];

  return (
    <div className="bg-white border-t border-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around items-center gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl font-extrabold text-gold leading-none mb-1">{stat.value}</p>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsTicker;
