export interface ItineraryItem {
  time: string;
  title: string;
  desc: string;
}

export interface Experience {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  bgImage: string;
  cardImage: string;
  pricePerPerson: number;
  duration: string;
  location: string;
  difficulty: string;
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  rating: number;
  reviewCount: number;
}

export interface BookingAddon {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface BookingDetails {
  id: string;
  experienceId: string;
  date: string;
  guests: number;
  addons: string[];
  fullName: string;
  email: string;
  phone: string;
  specialNotes: string;
  totalPrice: number;
  bookingCode: string;
  paymentMethod: string;
  cardNumber?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  experienceId: string;
  avatarUrl?: string;
  verified: boolean;
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'car' | 'motorbike';
  image: string;
  passengers?: number;
  transmission: string;
  engine: string;
  priceWithDriverPerDay: number;
  priceWithoutDriverPerDay: number;
  description: string;
  features: string[];
}

