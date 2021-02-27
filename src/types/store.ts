export interface IAction<T, I> {
  type: T;
  payload: I;
}
