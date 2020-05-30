import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export type InternalStateType = {
  [key: string]: any;
};

type Key =
  | 'plan'
  | 'plans'
  | 'planItem'
  | 'planItems'
  | 'account'
  | 'dictionary'
  | 'advertLotNotifier'
  | 'loaders'
  | 'blocker'
  | 'eContractProject'
  | 'serverTime';

interface Model {
  account: Subject<any>;
  plan: Subject<any>;
  plans: Subject<any>;
  planItem: Subject<any>;
  planItems: Subject<any>;
  dictionary: Subject<any>;
  advertLotNotifier: Subject<any>;
  loaders: Subject<any>;
  eContractProject: Subject<any>;
  serverTime: Subject<any>;
  blocker: Subject<any>;
}

@Injectable()
export class AppState {
  private model: Model = {
    account: new Subject<any>(),
    plan: new Subject<any>(),
    plans: new Subject<any>(),
    planItem: new Subject<any>(),
    planItems: new Subject<any>(),
    dictionary: new Subject<any>(),
    advertLotNotifier: new Subject<any>(),
    loaders: new Subject<any>(),
    eContractProject: new Subject<any>(),
    serverTime: new Subject<any>(),
    blocker: new Subject<any>(),
  };

  isMain = false;
  public _state: InternalStateType = {};

  // already return a clone of the current state
  public get state() {
    return this._state;
  }
  // never allow mutation
  public set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  public get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  public set(prop: string, value: any) {
    // internally mutate our state
    return (this._state[prop] = value);
  }

  public setObservable(prop: Key, value: any) {
    this.model[prop].next(value);
  }

  public getObservable(key): Observable<any> {
    return this.model[key].asObservable();
  }

  private _clone(object: InternalStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify(object));
  }
}
