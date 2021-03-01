import { IHotelState } from "../.././types/store";
const readStateFromLocalStorage = () => {
  const hotelStateRawFromLocalStorage = localStorage.getItem("hotelState");

  const hotelStateFromLocalStorage: IHotelState =
    hotelStateRawFromLocalStorage && JSON.parse(hotelStateRawFromLocalStorage);

  if (hotelStateFromLocalStorage?.data) {
    const { end_date, start_date } = hotelStateFromLocalStorage.data;
    if (end_date) {
      hotelStateFromLocalStorage.data.end_date = new Date(end_date);
    }
    if (start_date) {
      hotelStateFromLocalStorage.data.start_date = new Date(start_date);
    }
  }
  return hotelStateFromLocalStorage;
};
export const defaultState = {
  currentStep: 1,
  data: undefined,
};
const state: IHotelState = readStateFromLocalStorage() || defaultState;

export default state;
