import Actions from "./Actions";
import { IActions, IState } from "./interfaces";

export const AppReducer = (state: IState, action: IActions): IState => {
  switch (action.type) {
    case Actions.SET_COMPANY_NAME: {
      console.log("in", action.payload);
      return {
        ...state,
        companyName: action.payload,
      };
    }
    default:
      return state;
  }
};

/* const reducerMap: any = {
  AppReducer: "appState",
};

export const combinedReducers =
  (slices: any) =>
  (state: IState, action: IActions): IState =>
    Object.keys(slices).reduce(
      (acc: any, val: any) => ({
        ...acc,
        [reducerMap[val]]: slices[val](acc[reducerMap[val]], action),
      }),
      state
    );

export const rootReducer = combinedReducers({
  AppReducer,
}); */
