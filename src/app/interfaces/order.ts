export interface Order {
isExpanded: any;
Orders: Order[];
cartId: string;
createdAt: any;
id: string;
description: string;
total: number;
userId: string;
shippingAddress: {
  address:String,
  coordinates:{
    lat:{
      type: Number,
      required: true,
      default: 0.0
    },
    lng:{
      type: Number,
      required: true,
      default: 0.0
    }
  }
},
deliveryDetails:{
  DriverId: {
    type: String,
    // ref: 'Driver',
    required: true
  },
  coordinates:{
    lat:{
      type: Number,
      required: true,
      default: 0.0
    },
    lng:{
      type: Number,
      required: true,
      default: 0.0
    }
  },
},
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
