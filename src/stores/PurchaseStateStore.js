'use strict';

import dispatcher from '../dispatcher/dispatcher';
import R from 'ramda';

let EventEmitter = require('events').EventEmitter;
let event = new EventEmitter();

//TODO: nomeclaturas de eventos serem constantes e não strings
class PurchaseStateStore {
  constructor(){
    //TODO: carregar o state inicial aqui(cookie(lib), create request(lib), send(lib), set in state)
  }
  get(){
    return this;
  }
  register(){
    dispatcher.register(function(action){
      switch(action.actionType){
        case 'CHANGED_ORDERID':
          this.orderId = action.orderId;
          event.emit('CHANGED_ORDERID');
          break;
      }
    });
  }

  listen(callback) {
    event.on('CHANGED_ORDERID', callback);
  }
}

let state = new PurchaseStateStore();
state.register();

export default state;
