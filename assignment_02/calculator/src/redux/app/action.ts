import {AppActionTypes, SAVE_DATA_CALCULATE} from './type';

export const saveDataCalculate = (data: any): AppActionTypes => {
  return {
    type: SAVE_DATA_CALCULATE,
    payload: data,
  };
};
