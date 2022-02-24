export interface Rental {
  id: number;
  brandName: string;
  customerName: string;
  customerId: number;
  userId: number;
  dailyPrice: number;
  rentDate: Date;
  returnDate: Date;
}
