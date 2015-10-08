'use strict';

require('styles//OrderIdBlock.scss');
import React from 'react/addons';
import PurchaseStateStore from 'stores/PurchaseStateStore';

class OrderIdBlock extends React.Component {
  constructor(){
    super();
    let state = PurchaseStateStore.Instance();
    this.state = state.get();
  }

  render() {
    return (
      <div className="orderidblock-component">
        <div className="row">
          <div className="col-md-8 col-xs-12">
            Mensagem qualquer1!
          </div>
          <div className="col-md-4 col-xs-12">
            {this.state.orderId}
          </div>
        </div>
      </div>
    );
  }
}

export default OrderIdBlock;
