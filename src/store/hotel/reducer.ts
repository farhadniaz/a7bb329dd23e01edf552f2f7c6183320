import actions, { Actions } from "./actions";
import appInitialState, { IHotelReservation } from "./initialState";
import { IAction } from "../../types/store";

export type Action = IAction<Actions, IHotelReservation | number>;

export default function reducer(state = appInitialState, action: Action) {
  const newState = { ...state };
  switch (action.type) {
    case actions.SET_DATA:
      newState.data = {
        ...newState.data,
        ...(action.payload as IHotelReservation),
      };
      return newState;
    case actions.SET_STEP:
      newState.currentStep = action.payload as number;
      return newState;

    default:
      return state;
  }
}
