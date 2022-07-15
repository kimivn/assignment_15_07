import {appReducer} from './app';
import {combineReducers} from 'redux';
import {ReduxState} from '../interfaces';

export const RootReducer = combineReducers<ReduxState>({
  app: appReducer,
});
