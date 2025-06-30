export interface AddOrderReq {
  fullName: string;
  address: string;
  phoneNumber: string;
  date: Date;
  products: OrderProduct[];
}

interface OrderProduct {
  productId: number;
  quantity: number;
}
