import { ICoupon, Roomscenic, Roomtype } from "../types/hotel";
export const getDateDiffInDay = (start_date: Date, end_date: Date): number => {
  //  @ts-ignore
  const Difference_In_Time = end_date.getTime() - start_date.getTime();
  const Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
  return Difference_In_Days;
};

interface ICalcHotelTotalData {
  room_type: Roomtype;
  room_scenic: Roomscenic;
  couppon?: ICoupon;
  day: number;
  adult: number;
}
export const calcHotelTotal = (data: ICalcHotelTotalData) => {
  const { room_type, room_scenic, couppon, day, adult } = data;

  let total = room_type.price * day * adult;
  total = total + (total * room_scenic.price_rate) / 100;
  total = couppon ? total - couppon.discount_ammount : total;
  return total;
};

export const formatPrice = (p: number | string) => Number(p).toLocaleString();

export const handleFetchResponseErrors = (response: any) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
