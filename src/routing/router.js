import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import routes from '../constants/routes';
import PrivateRoute from './private-route';

import { UserHome, Login, Home } from '../views';
import { Error404 } from '../views/errors';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* Public routes */}
                <Route exact path={routes.login.path} component={Login} />

                {/* Private routes */}
                <PrivateRoute exact path={routes.root.path} component={Home} />

                <PrivateRoute exact path={routes.root.path} component={UserHome} />
                <PrivateRoute path={routes.dashboard.path} component={UserHome} />

                {/* 404 in all other cases */}
                <Route exact path={routes.error404.path} component={Error404} />
                <Redirect to={{ pathname: routes.error404.path }} />
            </Switch>
        </BrowserRouter>
    );
}