export const SET_DATA = "SET_DATA";
export const SET_STEP = "SET_STEP";

const actions = {
  SET_DATA,
  SET_STEP,
};

export type Actions = keyof typeof actions;

export default actions;
