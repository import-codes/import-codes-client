import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import routes from './routes';
import PrivateRoute from './private-route';

import { Login, Home } from '../views';
import { Error404 } from '../views/errors';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* Public routes */}
                <Route exact path={routes.login.path} component={Login} />

                {/* Private routes */}
                {/* <PrivateRoute exact path={routes.root.path} component={Dashboard} /> */}
                {/* <PrivateRoute path={routes.dashboard.path} component={Dashboard} /> */}
                <PrivateRoute exact path={routes.root.path} component={Home} />

                {/* 404 in all other cases */}
                <Route exact path={routes.error404.path} component={Error404} />
                <Redirect to={{ pathname: routes.error404.path }} />
            </Switch>
        </BrowserRouter>
    );
}

/**
= <PrivateRoute exact path={routes.branchOffices.path} component={BranchOffices} />
        <PrivateRoute path={routes.branchOfficesNew.path} component={NewBranchOffices} />

        <PrivateRoute exact path={routes.roles.path} component={Roles} />
        <PrivateRoute exact path={routes.rolesNew.path} component={NewRoles} />
 */