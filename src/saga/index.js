import {fork} from 'redux-saga/effects';
import CategoryListingPage from '../templates/CategoryListingPage';
import CategoryLandingPage from '../templates/CategoryLandingPage';

export default function* rootSaga(){
	yield fork(CategoryListingPage.watchCategoryList);	
	yield fork(CategoryLandingPage.watchCategoryLanding);
}