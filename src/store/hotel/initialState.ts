export interface IpaymentCard {
  name?: string;
  number?: number;
  expiration?: Date;
  CVV?: number;
}

export interface IHotelReservation {
  hotelName?: string;
  enterDate?: Date;
  exitDate?: Date;
  adults?: number;
  children?: number;
  roomType?: string;
  couponCode?: string;
  paymentCard?: IpaymentCard;
}

export interface IState {
  currentStep?: number;
  data?: IHotelReservation;
}
const state: IState = {
  currentStep: 1,
  data: undefined
  
};

export default state;
