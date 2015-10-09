'use strict';

import dispatcher from '../dispatcher/dispatcher';

class Action{
  static changeOrderId(orderId){
    dispatcher.dispatch({
      actionType: 'CHANGED_ORDERID',
      orderId: orderId
    });
  }
}

export default Action;
