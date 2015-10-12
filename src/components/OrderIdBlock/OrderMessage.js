'use strict';

require('styles//OrderIdBlock.scss');

//dependencies
import React from 'react/addons';
import translate from '../../translate/translate';

class OrderMessage extends React.Component {
  render() {
    let message = this.props.closed ? translate.order_closed : translate.order_open;

    return (
      <div>
        <h3>{message}</h3>
      </div>
    );
  }
}

export default OrderMessage;
