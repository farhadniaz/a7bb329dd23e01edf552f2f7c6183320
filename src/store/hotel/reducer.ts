import actions, { Actions } from "./actions";
import appInitialState from "./initialState";
import { IAction, IHotelState } from "../../types/store";
import { IHotelReservation } from "../../types/hotel";

export type Action = IAction<Actions, IHotelReservation | number>;

const updateLocalStorage = (state: IHotelState) => {
  localStorage.setItem("hotelState", JSON.stringify(state));
};

export default function reducer(state = appInitialState, action: Action) {
  const newState = { ...state };
  switch (action.type) {
    case actions.SET_DATA:
      newState.data = {
        ...newState.data,
        ...(action.payload as IHotelReservation),
      };
      updateLocalStorage(newState);
      return newState;
    case actions.SET_STEP:
      newState.currentStep = action.payload as number;
      updateLocalStorage(newState);
      return newState;

    default:
      return state;
  }
}
