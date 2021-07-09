import React from 'react';
import { shallow, render, mount } from 'enzyme';
import chatMessage from './chatMessage';

describe('chatMessage', () => {
  let props;
  let shallowchatMessage;
  let renderedchatMessage;
  let mountedchatMessage;

  const shallowTestComponent = () => {
    if (!shallowchatMessage) {
      shallowchatMessage = shallow(<chatMessage {...props} />);
    }
    return shallowchatMessage;
  };

  const renderTestComponent = () => {
    if (!renderedchatMessage) {
      renderedchatMessage = render(<chatMessage {...props} />);
    }
    return renderedchatMessage;
  };

  const mountTestComponent = () => {
    if (!mountedchatMessage) {
      mountedchatMessage = mount(<chatMessage {...props} />);
    }
    return mountedchatMessage;
  };  

  beforeEach(() => {
    props = {};
    shallowchatMessage = undefined;
    renderedchatMessage = undefined;
    mountedchatMessage = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
