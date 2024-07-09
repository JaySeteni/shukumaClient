export interface Order {
isExpanded: any;
Orders: Order[];
cartId: string;
createdAt: any;
id: unknown;
description: string;
total: number;
userId: string;
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
driverId: string;
location:{
  lat:any; 
  long:any;
} 
}
