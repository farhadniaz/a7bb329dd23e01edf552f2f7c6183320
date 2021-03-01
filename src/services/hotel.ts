import useFetch from "../hooks/useFetch";
import { handleFetchResponseErrors } from "../utils";
import {
  IHotel,
  IHotelDetails,
  ICoupon,
  IHotelRegisterPayload,
} from "../types/hotel";

export const hotelListUrl =
  "https://5f6d939160cf97001641b049.mockapi.io/tkn/hotels";
export const hotelDetailsListUrl =
  "https://5f6d939160cf97001641b049.mockapi.io/tkn/hotel-details";

export const hotelCouponItemUrl =
  "https://5f6d939160cf97001641b049.mockapi.io/tkn/coupons?code=";

export const hotelbBokingUrl =
  "https://5f6d939160cf97001641b049.mockapi.io/tkn/hotel-bookings";

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

export const getCouponData = (code: string): Promise<ICoupon> => {
  return fetch(hotelCouponItemUrl + code)
    .then(handleFetchResponseErrors)
    .then((response) => response.json())
    .then((data) => {
      // @ts-ignore
      const r: ICoupon = data[0];
      return r;
    });
};

export const bookHotel = (data: IHotelRegisterPayload) => {
  return fetch(hotelbBokingUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(handleFetchResponseErrors)
    .then((response) => response.json());
};

export const cancelBookedHotel = (id: string) => {
  return fetch(hotelbBokingUrl + `/${id}`, {
    method: "DELETE",
  })
    .then(handleFetchResponseErrors)
    .then((response) => {
      console.log(response.status);
      return response.json();
    });
};

export const updateBookedHotel = (data: IHotelRegisterPayload, id: string) => {
  return fetch(hotelbBokingUrl + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(handleFetchResponseErrors)
    .then((response) => response.json());
};
