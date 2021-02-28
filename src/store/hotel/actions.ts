import { useDispatch } from "react-redux";
import { IHotelReservation } from "../../types/hotel";

export const SET_DATA = "SET_DATA";
export const SET_STEP = "SET_STEP";

const actions = {
  SET_DATA,
  SET_STEP,
};

export type Actions = keyof typeof actions;
type S = typeof SET_DATA;
export const useSetHotelReservationData = () => {
  const dispatch = useDispatch();
  return (data: IHotelReservation) =>
    dispatch({
      type: actions.SET_DATA,
      payload: data,
    });
};

export const useSetHotelStep = () => {
  const dispatch = useDispatch();
  return (step: number) =>
    dispatch({
      type: actions.SET_STEP,
      payload: step,
    });
};

export default actions;
