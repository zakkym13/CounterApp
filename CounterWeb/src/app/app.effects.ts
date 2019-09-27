import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import {
  CounterActionTypes,
  ScannedActionToLoadEffect
} from './actions/counter.actions';

class Counter {
  counter: number;
}

@Injectable()
export class AppEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<ScannedActionToLoadEffect>(
      CounterActionTypes.ScannedActionToLoadEffect
    ),
    mergeMap(() =>
      this.http.get('http://localhost:3000/counter').pipe(
        map((data: Counter) => {
          return {
            type: CounterActionTypes.LoadEffectToAction,
            payload: data.counter
          };
        })
      )
    )
  );
}
