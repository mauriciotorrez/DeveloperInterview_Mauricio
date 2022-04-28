export interface IActions {
  type: string;
  payload?: any;
}

export interface IState {
  isFetching: boolean;
  companyName: string;
  cats: [];
}

export interface IContext {
  state: IState;
  dispatch: (arg0: IActions) => void;
}
