import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './counter.reducer';

export interface State {
  counter: fromCounter.State;
  // [fromCounter.counterFeatureKey]: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {
  counter: fromCounter.reducer
  // [fromCounter.counterFeatureKey]: fromCounter.reducer
};

export const getCounterFeatureState = createFeatureSelector<
  State,
  fromCounter.State
>('counter');
export const getCounter = createSelector(
  getCounterFeatureState,
  state => state.counter
);

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
