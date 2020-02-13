import React, { Fragment } from 'react';
import { HashRouter,BrowserRouter as Route, Router, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import App from '../App';

const Root = () => (
    <BrowserRouter>
         <App/>
    </BrowserRouter>
);

export default Root;