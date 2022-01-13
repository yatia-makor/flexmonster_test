import React from 'react';
import _ from "lodash";
import { Switch, Route } from 'react-router-dom';

import { AppRoutes } from '../../../utils';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Routes = () => {

    const renderRoutes = () => {
        return _.values(AppRoutes).map(
            ({path, exact, name, component, private: isPrivate}) =>  
            isPrivate ?
            <PrivateRoute exact={exact} path={path} key={name} component={component} /> :
            <Route exact={exact} path={path} key={name} component={component} />)
    }

    return (
        <Switch>
            {renderRoutes()}
        </Switch>
    )
}

export default Routes