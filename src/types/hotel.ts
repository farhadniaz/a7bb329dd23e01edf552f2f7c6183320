export interface IHotel {
  id: string;
  hotel_name: string;
}

export interface Roomscenic {
  id: number;
  title: string;
  photo: string;
  price_rate: number;
}

export interface Roomtype {
  id: number;
  title: string;
  description: string;
  photo: string;
  price: number;
}

export interface IHotelDetails {
  id: string;
  hotel_id: number;
  city: string;
  possibilities: string[];
  adult: number;
  child_status: boolean;
  room_type: Roomtype[];
  room_scenic: Roomscenic[];
}

export interface IPaymentCard {
  name?: string;
  number?: number;
  expirationMonth?: number;
  expirationYear?: number;
  CVV?: number;
}
export type IPaymentCardSolid = {
  [K in keyof IPaymentCard]-?: IPaymentCard[K] | undefined;
};

export interface IHotelReservation {
  hotel_id?: string;
  hotelName?: string;
  hotelDetails?: IHotelDetails;
  start_date?: Date;
  end_date?: Date;
  adult?: number;
  child?: number;
  room_type?: number;
  room_scenic?: number;
  couponCode?: ICoupon;
  paymentCard?: IPaymentCard;
  reservedId?: number;
}

export type HotelReservationSolid = {
  [K in keyof IHotelReservation]-?: IHotelReservation[K] | undefined;
};

export interface IHotelRegisterPayload {
  hotel_id: number;
  start_date: string;
  end_date: string;
  adult: number;
  child: number;
  room_type: number;
  room_scenic: number;
  price: number;
  coupon_code: string;
  card_name: string;
  card_number: string;
  card_date_month: string;
  card_date_year: string;
  card_cvv: string;
}

export interface ICoupon {
  id: string;
  code: string;
  discount_ammount: number;
  expiration_at: string;
}
