export interface Product {
  id: string,
  businessId: string,
  category: string[],
  onPromo: boolean,
  rating: number,
  ratingCount: number,
  title: string,
  description: string,
  price: number,
  stock: number,
  imageUrl: string,
  quantity: number,
  variant: "4B"
}
