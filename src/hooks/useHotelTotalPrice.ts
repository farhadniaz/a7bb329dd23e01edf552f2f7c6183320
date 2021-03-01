import { useMemo } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { HotelReservationSolid } from "../types/hotel";
import { getDateDiffInDay, calcHotelTotal } from "../utils";

const useHotelTotalPrice = () => {
  const hotelData = useSelector(
    (state: RootStateOrAny) => state.Hotel.data
  ) as HotelReservationSolid;

  const room_scenic = useMemo(
    () =>
      hotelData.hotelDetails.room_scenic.find(
        (r) => r.id == hotelData.room_scenic
      ),
    [hotelData.room_scenic]
  );
  const room_type = useMemo(
    () =>
      hotelData.hotelDetails.room_type.find((r) => r.id == hotelData.room_type),
    [hotelData.room_type]
  );

  const Difference_In_Days = getDateDiffInDay(
    hotelData.start_date,
    hotelData.end_date
  );

  const total = useMemo(() => {
    const totalOBJ = {
      adult: hotelData.adult,
      couppon: hotelData.couponCode,
      day: Difference_In_Days,
      room_scenic,
      room_type,
    };
    // @ts-ignore
    const t = calcHotelTotal(totalOBJ);
    return { price: t, totalOBJ };
  }, [hotelData, room_scenic, room_type, Difference_In_Days]);

  return total;
};

export default useHotelTotalPrice;
