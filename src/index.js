import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import ReduxProvider from './redux/ReduxProvider';
import ThemeProvider from './styles/ThemeProvider';
import 'flexmonster/flexmonster.css';

ReactDOM.render(
    <ReduxProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </ReduxProvider>,
    document.querySelector('#root')
);