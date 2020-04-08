// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import Header from '../Header/Header';
import Home from '../Home';
import Example from '../Pages/Example'


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/example1' component={Example} exact={true} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);