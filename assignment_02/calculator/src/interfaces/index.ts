export interface ReduxState {
  app: AppState;
}

export interface AppState {
  list_calculation: Array<CalculationItem>;
}

export interface CalculationItem {
  calculate: string;
  result: string;
}
