import React from 'react';
import { Provider } from 'react-redux';

import store from "./store/index";

const ReduxProvider = (props) => (
    <Provider store={store}>
        {props.children}
    </Provider>
);

export default ReduxProvider;