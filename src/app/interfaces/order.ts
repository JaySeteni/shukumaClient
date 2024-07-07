export interface Order {
  Orders: Order[];
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
  items: string[];
  orderNumber: number;
}
