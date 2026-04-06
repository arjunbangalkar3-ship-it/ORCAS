import { TravelApp, ItineraryItem, Deal, Recommendation } from './types';

export const TRAVEL_APPS: TravelApp[] = [
  {
    id: 'mmt',
    name: 'MakeMyTrip',
    url: 'https://www.makemytrip.com/',
    icon: 'Plane',
    category: 'all',
    color: 'bg-blue-600'
  },
  {
    id: 'booking',
    name: 'Booking.com',
    url: 'https://www.booking.com/',
    icon: 'Hotel',
    category: 'hotel',
    color: 'bg-blue-800'
  },
  {
    id: 'skyscanner',
    name: 'Skyscanner',
    url: 'https://www.skyscanner.com/',
    icon: 'Search',
    category: 'flight',
    color: 'bg-cyan-500'
  },
  {
    id: 'google-flights',
    name: 'Google Flights',
    url: 'https://www.google.com/travel/flights',
    icon: 'PlaneTakeoff',
    category: 'flight',
    color: 'bg-white text-blue-600'
  },
  {
    id: 'redbus',
    name: 'RedBus',
    url: 'https://www.redbus.in/',
    icon: 'Bus',
    category: 'bus',
    color: 'bg-red-600'
  },
  {
    id: 'irctc',
    name: 'IRCTC',
    url: 'https://www.irctc.co.in/',
    icon: 'TrainFront',
    category: 'train',
    color: 'bg-orange-600'
  },
  {
    id: 'expedia',
    name: 'Expedia',
    url: 'https://www.expedia.com/',
    icon: 'Globe',
    category: 'all',
    color: 'bg-yellow-500'
  },
  {
    id: 'agoda',
    name: 'Agoda',
    url: 'https://www.agoda.com/',
    icon: 'Building2',
    category: 'hotel',
    color: 'bg-pink-600'
  }
];

export const INITIAL_ITINERARY: ItineraryItem[] = [
  {
    id: '1',
    type: 'flight',
    title: 'Flight to Paris',
    date: '2026-05-15',
    time: '10:30 AM',
    location: 'SFO -> CDG',
    status: 'confirmed',
    details: 'Air France AF83 - Terminal A'
  },
  {
    id: '2',
    type: 'hotel',
    title: 'Hotel de Ville',
    date: '2026-05-15',
    location: 'Paris, France',
    status: 'confirmed',
    details: '3 Nights - Standard Room'
  }
];

export const DEALS: Deal[] = [
  {
    id: 'd1',
    title: 'Summer in Bali',
    discount: '40% OFF',
    provider: 'Booking.com',
    image: 'https://picsum.photos/seed/bali/400/300',
    expiry: 'Ends in 2 days'
  },
  {
    id: 'd2',
    title: 'Last Minute Tokyo',
    discount: '$200 OFF Flights',
    provider: 'Skyscanner',
    image: 'https://picsum.photos/seed/tokyo/400/300',
    expiry: 'Limited time'
  },
  {
    id: 'd3',
    title: 'Europe Rail Pass',
    discount: 'Buy 1 Get 1',
    provider: 'IRCTC Global',
    image: 'https://picsum.photos/seed/europe/400/300',
    expiry: 'Seasonal offer'
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'r1',
    destination: 'Santorini, Greece',
    reason: 'Perfect for a romantic getaway with stunning sunsets.',
    image: 'https://picsum.photos/seed/santorini/400/300',
    price: 'From $1,200'
  },
  {
    id: 'r2',
    destination: 'Kyoto, Japan',
    reason: 'Experience the serene beauty of cherry blossoms and temples.',
    image: 'https://picsum.photos/seed/kyoto/400/300',
    price: 'From $950'
  },
  {
    id: 'r3',
    destination: 'Reykjavik, Iceland',
    reason: 'Witness the Northern Lights and soak in geothermal lagoons.',
    image: 'https://picsum.photos/seed/iceland/400/300',
    price: 'From $1,500'
  }
];
