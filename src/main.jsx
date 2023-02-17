import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './App.jsx';
import Layout from './components/Layout.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Layout children={<App />} />
    </BrowserRouter>
);