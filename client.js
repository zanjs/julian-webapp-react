import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { routes } from './routes';

import createBrowserHistory from './node_modules/history/lib/createBrowserHistory';


//import '!style!css!sass!./public/sass/bundle.scss';

ReactDOM.render(
    <Router routes={routes} history={createBrowserHistory()} />,
    document.getElementById('react-root')
);

window.onload = function(){ document.getElementById("loading").style.display = "none" }