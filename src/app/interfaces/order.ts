export interface Order {
Orders: Order[];
cartId: string;
createdAt: any;
  id: unknown;
  description: string;
  total: number;
  user: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  items: {
    productId: unknown;
    quantity: number;
    _id: any;
    length: number;
  };
  orderNumber: number;
  status: string;
}
