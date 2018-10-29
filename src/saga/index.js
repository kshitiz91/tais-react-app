import {fork} from 'redux-saga/effects';
import CategoryListingPage from '../templates/CategoryListingPage';

export default function* rootSaga(){
	yield fork(CategoryListingPage.watchCategoryList);
}