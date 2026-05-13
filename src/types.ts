export type PropertyType = 'Residential' | 'Rental' | 'Commercial' | 'Plot' | 'Builder Project';
export type ListingType = 'Buy' | 'Rent' | 'Sale';
export type BHK = '1RK' | '1BHK' | '2BHK' | '3BHK' | '4BHK' | '4BHK+';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceLabel: string;
  type: PropertyType;
  listingType: ListingType;
  bhk?: BHK;
  area: number;
  areaUnit: string;
  image: string;
  badges: string[];
  isVerified: boolean;
  isHot?: boolean;
  isNew?: boolean;
  description: string;
  amenities: string[];
  features: {
    label: string;
    value: string;
  }[];
  seller: {
    name: string;
    type: 'Owner' | 'Agent' | 'Builder';
    avatar: string;
    verified: boolean;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  propertyType: string;
  quote: string;
  rating: number;
}
