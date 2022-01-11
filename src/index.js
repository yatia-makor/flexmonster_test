import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import ReduxProvider from './redux/ReduxProvider';

ReactDOM.render(
    <ReduxProvider>
        <App />
    </ReduxProvider>,
    document.querySelector('#root')
);