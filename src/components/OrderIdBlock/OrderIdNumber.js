'use strict';

require('styles//OrderIdBlock.scss');

//dependencies
import React from 'react/addons';
import action from '../../actions/action';

class OrderIdNumber extends React.Component {
  handlerClick(){
    action.changeOrderId('654321');
  }

  render() {
    return (
      <div>
        <h3>{this.props.number}</h3>
      </div>
    );
  }
}

export default OrderIdNumber;
