import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { ResourceProvider } from './contexts/ResourceContext';

ReactDOM.render(
    <BrowserRouter>
        <ResourceProvider>
            <App />
        </ResourceProvider>
    </BrowserRouter>    ,
    document.getElementById('root')
);


