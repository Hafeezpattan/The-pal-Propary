import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Square, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { Property } from '../types';
import { motion } from 'motion/react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`}>
      <motion.div 
        whileHover={{ y: -6 }}
        className="property-card group h-full"
      >
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {property.isNew && <span className="badge-new">New Launch</span>}
          {property.isHot && <span className="badge-hot">Hot Deal</span>}
          <span className={property.listingType === 'Rent' ? 'badge-rent' : 'badge-sale'}>
            {property.listingType === 'Rent' ? 'For Rent' : 'For Sale'}
          </span>
        </div>

        <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
          <Heart className="w-5 h-5" />
        </button>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4">
          <p className="bg-gold text-white px-3 py-1.5 rounded-lg text-lg font-extrabold flex items-baseline gap-1 shadow-md">
            ₹{property.price.toLocaleString()}
            {property.priceLabel === 'month' && <span className="text-[10px] font-bold opacity-80 uppercase">/mo</span>}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-navy group-hover:text-gold transition-colors truncate">
          {property.title}
        </h3>
        <div className="flex items-center gap-1 text-gray-500 text-[13px] mb-5">
          <MapPin className="w-4 h-4 text-gray-300" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 py-4 border-t border-gray-50 font-medium text-navy text-[13px]">
          {property.bhk && (
            <div className="flex items-center gap-1.5">
              <span>{property.bhk.split('BHK')[0]} Beds</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <span>{property.area} {property.areaUnit}</span>
          </div>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

export default PropertyCard;
