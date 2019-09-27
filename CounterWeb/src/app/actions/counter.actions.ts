import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  ScannedActionToLoadEffect = '[Counter] ScannedAction To LoadEffect Counters',
  LoadEffectToAction = '[Counter] LoadEffect To Action Counters',
  Increment = '[Counter] Increment Counter',
  Decrement = '[Counter] Decrement Counter',
  Reset = '[Counter] Reset Counter'
}

export class ScanToScannedAction implements Action {
  readonly type = CounterActionTypes.ScannedActionToLoadEffect;
  constructor() {}
}

export class ScannedActionToLoadEffect implements Action {
  readonly type = CounterActionTypes.LoadEffectToAction;
  constructor(public payload: number) {}
}

export class IncrementCounter implements Action {
  readonly type = CounterActionTypes.Increment;
  constructor() {}
}

export class DecrementCounter implements Action {
  readonly type = CounterActionTypes.Decrement;
  constructor() {}
}

export class ResetCounter implements Action {
  readonly type = CounterActionTypes.Reset;
  constructor() {}
}

export type CounterActions =
  | ScanToScannedAction
  | ScannedActionToLoadEffect
  | IncrementCounter
  | DecrementCounter
  | ResetCounter;
