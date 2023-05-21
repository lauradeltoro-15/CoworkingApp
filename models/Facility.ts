export type Facility = {
  id:string;
  name: string;
  description: string;
  images: string[];
  pricePerDay: number;
  location?: Location;
  rating?: number;
};

type Location = {
  country: string;
  city: string;
  lat: number;
  lng: number;
};
