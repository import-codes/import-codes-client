import React from 'react'
import { Switch } from 'react-router-dom';

import routes from './routes';
import PrivateRoute from './private-route';

import DashboardLayout from '../layouts/dashboard-layout';

import { Error404 } from '../views/errors';

//import Dashboard from '../views/dashboard/dashboard';

const DashboardContentSelector = () => (
    <Switch>
        {/* <PrivateRoute exact path={routes.root.path} component={Dashboard} /> */}
        {/* <PrivateRoute path={routes.dashboard.path} component={Dashboard} /> */}

        <PrivateRoute component={Error404} />
    </Switch>
);

const ModuleRoutes = () => (
    <DashboardLayout>
        <DashboardContentSelector />
    </DashboardLayout>
)

export default ModuleRoutes;

/**
 *

        <PrivateRoute exact path={routes.branchOffices.path} component={BranchOffices} />
        <PrivateRoute path={routes.branchOfficesNew.path} component={NewBranchOffices} />

        <PrivateRoute exact path={routes.roles.path} component={Roles} />
        <PrivateRoute exact path={routes.rolesNew.path} component={NewRoles} />
 */