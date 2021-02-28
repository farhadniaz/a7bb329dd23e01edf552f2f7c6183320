import useFetch from "../hooks/useFetch";
import { IHotel, IHotelDetails } from "../types/hotel";
export const hotelListUrl =
  "https://5f6d939160cf97001641b049.mockapi.io/tkn/hotels";
export const hotelDetailsListUrl =
  "https://5f6d939160cf97001641b049.mockapi.io/tkn/hotel-details";

export const useGetHotels = () => {
  return useFetch<IHotel[]>(hotelListUrl);
};

export const getHotelDetails = (): Promise<IHotelDetails[]> => {
  return fetch(hotelDetailsListUrl).then((response) => response.json());
};

export const useGetHotelDetails = () => {
  // @ts-ignore
  return useFetch<IHotelDetails[]>(getHotelDetails);
};
