'use strict';

let EventEmitter = require('events').EventEmitter;

class PurchaseStateStore {

  constructor() {
    throw 'Cannot iniatilize this class(Singleton class)';
  }

  create(){
    this.instance = {
      orderId: 999
    }
  }

  static Instance() {
    if (!this.instance) {
      this.create();
    }

    return this.instance;
  }

  Get(){
    if (!this.instance) {
      this.create();
    }

    return this.instance;
  }

  Change(prop, value){
    if (!this.instance) {
      this.create();
    }

    this.instance[prop] = value;
    EventEmitter.emit('PurchaseStateStore:' + prop, value);
  }

  Listen(prop, callback){
    eventEmitter.on('PurchaseStateStore:' + prop, callback);
  }
}

export default PurchaseStateStore;
