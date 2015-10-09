require('normalize.css');
require('styles/App.css');
import React from 'react/addons';

let OrderIdBlock = require('../components/OrderIdBlock/OrderIdBlock')

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <OrderIdBlock />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
