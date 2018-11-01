import React, {lazy, Suspense} from 'react';
import Loadable from 'react-loadable';
import {Loader} from '../common/loader/loader';


/* const HomeComponent = lazy(() => import(Home));
const CategoryListingComponent = lazy(() => import('../templates/CategoryListingPage/categoryListingPage'));
 */
const HomeComponent = Loadable({
  loader: () => import('../templates/home/Home'),
  loading: () => <Loader></Loader>,
  delay: 2000
});

const CategoryListingComponent = Loadable({
   loader: () => import('../templates/CategoryListingPage/categoryListingPage'),
 	loading: () => <Loader></Loader>,
   delay: 2000
 });

 const CategoryLandingComponent = Loadable({
  loader: () => import('../templates/CategoryLandingPage/categoryLandingPage'),
  loading: () => <Loader></Loader>,
  delay: 2000
});
const routesConfig = [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/category/:catgId',
      component: CategoryListingComponent,
    },
    {
      path: '/categoryLandingPage/:catgId',
      component: CategoryLandingComponent,
    }
];

export default routesConfig;