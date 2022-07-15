import {Reducer} from 'redux';
import {AppState} from '../../interfaces';
import {AppActionTypes, SAVE_DATA_CALCULATE} from './type';

const INITIAL: AppState = {
  list_calculation: [],
};

export const appReducer: Reducer<AppState, AppActionTypes> = (
  state: AppState = INITIAL,
  action: AppActionTypes,
): AppState => {
  const {type, payload} = action;
  console.log(1111, [...state.list_calculation, payload]);
  switch (type) {
    case SAVE_DATA_CALCULATE:
      return {
        ...state,
        list_calculation: [...state.list_calculation, payload],
      };
    default:
      return state;
  }
};
