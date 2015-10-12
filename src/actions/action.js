'use strict';

import PurchaseState from '../states/PurchaseState';

class Action{
  static changeOrderId(orderId){
    PurchaseState.Change('orderId', orderId);
  }
}

export default Action;
