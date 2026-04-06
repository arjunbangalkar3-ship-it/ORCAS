export interface ItineraryItem {
  id: string;
  type: 'flight' | 'hotel' | 'train' | 'bus';
  title: string;
  date: string;
  time?: string;
  location: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  details: string;
}

export interface TravelApp {
  id: string;
  name: string;
  url: string;
  icon: string;
  category: 'flight' | 'hotel' | 'train' | 'bus' | 'all';
  color: string;
}

export interface Deal {
  id: string;
  title: string;
  discount: string;
  provider: string;
  image: string;
  expiry: string;
}

export interface Recommendation {
  id: string;
  destination: string;
  reason: string;
  image: string;
  price: string;
}
