import R from 'ramda';

let EventEmitter = require('events').EventEmitter;
let events = new EventEmitter();

class PurchaseState{
  constructor(){
    this.state = {
      orderId: '123456',
      closed: true
    }
  }
  Get(){
    return this.state;
  }
  Listen(event, callback){
    events.on('PurchaseStateService:' + event, callback);
  }
  Change(prop, value){
    if(!!this.state[prop]){
      this.state[prop] = value;
      events.emit('PurchaseStateService:' + prop, value);
    }
  }
}

let state = new PurchaseState();

export default state;
