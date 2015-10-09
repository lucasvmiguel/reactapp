'use strict';

require('styles//OrderIdBlock.scss');
import React from 'react/addons';
import PurchaseStateStore from 'stores/PurchaseStateStore';
import action from '../../actions/action';

class OrderIdBlock extends React.Component {
  constructor(){
    super();
    this.state = PurchaseStateStore.get();
  }

  componentDidMount(){
    PurchaseStateStore.listen(() => {
      this.state = PurchaseStateStore.get();
    });
  }

  handleSubmit(){
    action.changeOrderId('oi!');
  }

  render() {
    return (
      <div className="orderidblock-component">
        <div className="row">
          <div className="col-md-8 col-xs-12">
            <form onSubmit={this.handleSubmit}>
              <input />
              <button>Change State</button>
            </form>
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
