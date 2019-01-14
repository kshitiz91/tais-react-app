import React from 'react';
import Loadable from 'react-loadable';
import {Loader} from '../common/loader/loader';


/* const HomeComponent = lazy(() => import(Home));
const CategoryListingComponent = lazy(() => import('../templates/CategoryListingPage/categoryListingPage'));
 */
const HomeComponent = Loadable({
	loader: () => import(/*webpackChunkName: "home"*/'../templates/home/Home'),
	loading: () => <Loader></Loader>,
	modules: ['home']
});

const CategoryListingComponent = Loadable({
   loader: () => import( /*webpackChunkName: "categorylisting"*/ '../templates/CategoryListingPage/categoryListingPage'),
	 loading: () => <Loader></Loader>,
	 modules: ['categorylisting']
 });

 const CategoryLandingComponent = Loadable({
  loader: () => import( /*webpackChunkName: "categorylanding"*/ '../templates/CategoryLandingPage/categoryLandingPage'),
	loading: () => <Loader></Loader>,
	modules: ['categorylanding']
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