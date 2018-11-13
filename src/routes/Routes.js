import React, { Component } from 'react';
import { Switch,Route } from 'react-router';
import routesConfig from './routesConfig';

const Routes = () => (  
      <div>
        <Switch>
        {routesConfig.map((route) => (
          <Route exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
      </div>
    );

export default Routes;