//  ** import core packages:
import React from 'react';

// ** import state management:
import { Provider } from 'react-redux';
import reduxStore from '../Store';


const Providers = (props) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};

export default Providers;
