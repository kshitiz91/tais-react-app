import React, { Component } from 'react';
import { Switch,Route, IndexRoute } from 'react-router';
import Home from '../templates/home/Home';
import CategoryListingPage from '../templates/CategoryListingPage/categoryListingPage';

const routesConfig = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/category/:catgId',
    component: CategoryListingPage,
  }
];
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