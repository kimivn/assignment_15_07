import {CalculationItem} from '../../interfaces';

export const SAVE_DATA_CALCULATE = 'SAVE_DATA_CALCULATE';

interface SaveDataCalculate {
  type: typeof SAVE_DATA_CALCULATE;
  payload: CalculationItem;
}

export type AppActionTypes = SaveDataCalculate;
