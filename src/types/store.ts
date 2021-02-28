import { IHotelReservation } from "./hotel";

export interface IAction<T, P> {
  type: T;
  payload: P;
}

export interface IHotelState {
  currentStep?: number;
  data?: IHotelReservation;
}
