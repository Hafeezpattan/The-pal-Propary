import React, { useState } from 'react';
import { DUMMY_PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';
import { SlidersHorizontal, ChevronDown, Grid, List as ListIcon } from 'lucide-react';

const Residential: React.FC = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8">
          <nav className="text-xs text-gray-400 mb-4 flex items-center gap-2">
            <span>Home</span>
            <span>/</span>
            <span>Buy</span>
            <span>/</span>
            <span className="text-navy font-bold">Residential</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold text-navy mb-2">1,240 Residential Properties in Dehradun</h1>
              <p className="text-gray-500 text-sm">Discover top-rated apartments, villas, and independent floors.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex bg-white rounded-lg border border-gray-200 p-1">
                <button 
                  onClick={() => setViewType('grid')}
                  className={`p-1.5 rounded ${viewType === 'grid' ? 'bg-gray-100 text-navy' : 'text-gray-400'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setViewType('list')}
                  className={`p-1.5 rounded ${viewType === 'list' ? 'bg-gray-100 text-navy' : 'text-gray-400'}`}
                >
                  <ListIcon className="w-5 h-5" />
                </button>
              </div>
              <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-bold text-navy focus:outline-none">
                <option>Sort by: Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar FILTERS */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
                <h3 className="font-bold text-navy flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </h3>
                <button className="text-gold text-xs font-bold">Clear All</button>
              </div>

              {/* Filter Group */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-navy mb-4 flex items-center justify-between">
                    Property Type <ChevronDown className="w-4 h-4" />
                  </h4>
                  <div className="space-y-3">
                    {['1BHK', '2BHK', '3BHK', '4BHK+', 'Villa', 'Penthouse'].map(type => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold" />
                        <span className="text-sm text-gray-500 group-hover:text-navy transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-navy mb-4 flex items-center justify-between">
                    Budget Range <ChevronDown className="w-4 h-4" />
                  </h4>
                  <div className="px-2">
                    <input type="range" className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-gold" />
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400">
                      <span>₹5 Lakh</span>
                      <span>₹5 Crore</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-navy mb-4 flex items-center justify-between">
                    Furnishing <ChevronDown className="w-4 h-4" />
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Unfurnished', 'Semi', 'Fully'].map(opt => (
                      <button key={opt} className="px-3 py-1.5 border border-gray-100 rounded-lg text-xs font-bold text-gray-500 hover:border-gold hover:text-gold transition-all">
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="btn-primary w-full py-3 text-sm shadow-md shadow-gold/10">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN GRID */}
          <div className="flex-grow">
            <div className={`grid gap-6 ${viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {DUMMY_PROPERTIES.filter(p => p.listingType === 'Buy' || p.listingType === 'Sale').map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
              {/* Duplicate some for effect */}
              {DUMMY_PROPERTIES.filter(p => p.listingType === 'Buy' || p.listingType === 'Sale').map((property) => (
                <PropertyCard key={property.id + '-2'} property={{...property, id: property.id + '-2'}} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex items-center justify-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-navy hover:bg-gray-50 transition-colors">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold text-white font-bold">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-navy hover:bg-gray-50 transition-colors">3</button>
              <span className="px-2 text-gray-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-navy hover:bg-gray-50 transition-colors">12</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residential;
