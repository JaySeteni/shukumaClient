import { Product } from './product';

export interface ProductDbResponse {
  Orders: import("c:/Users/GSB_STUDENT_1/Desktop/shukuma-client/shukumaClient/src/app/interfaces/order").Order[];
  message: string,
  products: Product[];
}
