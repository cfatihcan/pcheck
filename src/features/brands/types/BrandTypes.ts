export interface Brand {
  id: number;

  name: string;

  phone: string;

  address: string;

  latitude: number;

  longitude: number;

  workingHours?: string;

  isOpen?: boolean;
}