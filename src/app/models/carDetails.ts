import { CarImage } from './car-Image';

export interface CarDto {
  id: number;
  carName: string;
  brandId: number;
  brandName: string;
  colorId: number;
  colorName: string;
  modelYear: string;
  dailyPrice: number;
  description: string;
  carImages: CarImage[];
}
