/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import OrderIdBlockComponent from 'components//OrderIdBlockComponent.js';

describe('OrderIdBlockComponent', () => {
    let component;

    beforeEach(() => {
      component = createComponent(OrderIdBlockComponent);
    });

    it('should have its component name as default className', () => {
      expect(component._store.props.className).to.equal('orderidblock-component');
    });
});
