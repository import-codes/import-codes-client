import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import routes from './routes';
import ModuleRoutes from './module-router';

import Login from '../views/login';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* Public routes */}
                <Route exact path={routes.login.path} component={Login} />

                {/* Private routes */}
                <ModuleRoutes />
            </Switch>
        </BrowserRouter>
    );
}

