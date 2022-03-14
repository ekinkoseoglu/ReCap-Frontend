export interface RentalDto {
  id: number;
  carId: number;
  brandName: string;
  customerName: string;
  customerId: number;
  userId: number;
  dailyPrice: number;
  rentDate: Date;
  returnDate: Date;
}
