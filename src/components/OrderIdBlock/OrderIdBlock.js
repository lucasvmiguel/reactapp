'use strict';

require('styles//OrderIdBlock.scss');

//dependencies
import React from 'react/addons';
import PurchaseState from '../../states/PurchaseState';

//components
import OrderIdNumber from './OrderIdNumber';
import OrderMessage from './OrderMessage';

class OrderIdBlock extends React.Component {
  constructor(){
    super();
    this.state = PurchaseState.Get();
  }

  componentDidMount(){
    PurchaseState.Listen('orderId', (orderId) => {
      this.setState(PurchaseState.Get());
    });
  }

  render() {
    return (
      <div className="orderidblock-component">
        <div className="row">
          <div className="col-md-8 col-xs-12">
            <OrderMessage closed={this.state.closed}/>
          </div>
          <div className="col-md-4 col-xs-12">
            <OrderIdNumber number={this.state.orderId}/>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderIdBlock;
