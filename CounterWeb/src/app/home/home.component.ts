import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AppStore from '../reducers';
import * as CounterActions from '../actions/counter.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store<AppStore.State>) {
    this.counter$ = this.store.select(AppStore.getCounter);
  }

  ngOnInit() {
    this.store.dispatch(new CounterActions.ScanToScannedAction());
  }

  increment() {
    this.store.dispatch(new CounterActions.IncrementCounter());
  }

  decrement() {
    this.store.dispatch(new CounterActions.DecrementCounter());
  }

  reset() {
    this.store.dispatch(new CounterActions.ResetCounter());
  }
}
