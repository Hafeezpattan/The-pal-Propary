import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DUMMY_PROPERTIES } from '../constants';
import { 
  MapPin, BedDouble, Bath, Square, Calendar, Compass, 
  ShieldCheck, Share2, Heart, Phone, Mail, Calculator
} from 'lucide-react';
import { motion } from 'motion/react';

const PropertyDetail: React.FC = () => {
  const { id } = useParams();
  const property = DUMMY_PROPERTIES.find(p => p.id === id) || DUMMY_PROPERTIES[0];

  const amenities = [
    { name: 'Lift', icon: '🏢' },
    { name: 'Power Backup', icon: '🔋' },
    { name: 'Security', icon: '👮' },
    { name: 'CCTV', icon: '📹' },
    { name: 'Garden', icon: '🌳' },
    { name: 'Gym', icon: '🏋️' },
    { name: 'Pool', icon: '🏊' },
    { name: 'Club House', icon: '🎨' },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8 h-[300px] lg:h-[500px]">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden relative">
            <img src={property.image} className="w-full h-full object-cover" alt="Main" />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="badge-verified bg-white shadow-xl py-2 px-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold" />
                VERIFIED PROPERTY
              </span>
            </div>
          </div>
          <div className="hidden lg:grid grid-rows-2 gap-4">
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Interior 1" />
            </div>
            <div className="rounded-2xl overflow-hidden relative pt">
               <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Interior 2" />
               <button className="absolute inset-0 bg-navy/40 flex items-center justify-center text-white font-bold hover:bg-navy/60 transition-all text-lg">
                 + 24 Photos
               </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Header Content */}
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <nav className="text-xs text-gray-400 flex items-center gap-2 font-medium">
                  <span>Home</span> / <span>{property.listingType}</span> / <span className="text-navy">Detail</span>
                </nav>
                <div className="flex gap-4">
                  <button className="p-3 bg-gray-50 rounded-full text-navy hover:bg-gold hover:text-white transition-all"><Share2 className="w-5 h-5" /></button>
                  <button className="p-3 bg-gray-50 rounded-full text-navy hover:bg-red-500 hover:text-white transition-all"><Heart className="w-5 h-5" /></button>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 leading-tight">
                {property.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center gap-2 py-1 px-3 bg-blue-soft text-navy rounded-full text-xs font-bold">
                  RERA REGISTERED: UK-P-022511
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-gray-50">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-gold">₹{property.price.toLocaleString()}</span>
                    {property.priceLabel === 'month' && <span className="text-lg font-bold text-gray-400">/ mo</span>}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-gray-100 p-4 rounded-2xl flex flex-col items-center min-w-[80px]">
                    <BedDouble className="w-5 h-5 text-navy mb-1" />
                    <span className="font-extrabold text-navy">{property.bhk || 'N/A'}</span>
                    <span className="text-[10px] text-gray-400 font-bold">BHK</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-2xl flex flex-col items-center min-w-[80px]">
                    <Bath className="w-5 h-5 text-navy mb-1" />
                    <span className="font-extrabold text-navy">2</span>
                    <span className="text-[10px] text-gray-400 font-bold">BATH</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-2xl flex flex-col items-center min-w-[80px]">
                    <Square className="w-5 h-5 text-navy mb-1" />
                    <span className="font-extrabold text-navy">{property.area}</span>
                    <span className="text-[10px] text-gray-400 font-bold">{property.areaUnit.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy mb-6">Property Overview</h3>
              <p className="text-gray-500 leading-loose text-lg font-medium">
                {property.description} This meticulously designed space offers a perfect blend of modern architecture and functional utility. Located in one of the most sought-after neighborhoods, it provides easy access to schools, hospitals, and major transit points. The interiors are crafted to let in natural light, ensuring a vibrant living experience.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div><span className="block text-[11px] font-bold text-gray-400 uppercase mb-2">Age of Property</span><span className="font-bold text-navy">3 Years</span></div>
                <div><span className="block text-[11px] font-bold text-gray-400 uppercase mb-2">Facing</span><span className="font-bold text-navy">East</span></div>
                <div><span className="block text-[11px] font-bold text-gray-400 uppercase mb-2">Floor</span><span className="font-bold text-navy">3 of 6</span></div>
                <div><span className="block text-[11px] font-bold text-gray-400 uppercase mb-2">Possession</span><span className="font-bold text-navy">Immediate</span></div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy mb-8">Amenities & Facilities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10">
                {amenities.map(item => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-navy">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-6">
            {/* Contact Card */}
            <div className="bg-navy rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl border-4 border-gold/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-extrabold mb-6">Contact Seller</h3>
              
              <div className="space-y-4 mb-8">
                <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-gold" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-gold" />
                <textarea placeholder="I'm interested in this property..." rows={3} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-gold resize-none"></textarea>
              </div>

              <button className="w-full btn-primary py-4 mb-4 shadow-xl shadow-gold/20">
                Send Enquiry
              </button>
              
              <div className="flex gap-4">
                <button className="flex-1 border border-white/20 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all font-bold">
                  <a href="tel:+919027389919" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold" />
                    Call
                  </a>
                </button>
                <button className="flex-1 border border-white/20 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all font-bold">
                  <Mail className="w-4 h-4 text-gold" />
                  Email
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Avatar" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Posted By</p>
                  <p className="font-extrabold text-gold">Vikram Singh <span className="text-[10px] bg-gold/20 text-gold px-1 rounded ml-1">OWNER</span></p>
                </div>
              </div>
            </div>

            {/* EMI Calculator */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-bold text-navy">EMI Calculator</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[11px] font-bold text-gray-400 uppercase">Down Payment</span>
                    <span className="text-[11px] font-bold text-navy">20%</span>
                  </div>
                  <input type="range" className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-gold" />
                </div>
                
                <div className="p-4 bg-gray-50 rounded-2xl text-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Your Monthly EMI</p>
                  <p className="text-3xl font-black text-navy leading-none mb-1">₹ 24,850</p>
                  <p className="text-[10px] text-gray-400 font-bold tracking-widest">PER MONTH</p>
                </div>

                <button className="w-full text-navy font-bold py-3 border-2 border-navy rounded-xl hover:bg-navy hover:text-white transition-all text-sm">
                  Apply for Home Loan
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
