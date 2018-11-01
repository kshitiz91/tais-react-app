import {takeLatest, put, call} from 'redux-saga/effects';
import * as actionType from './categoryLandingPage.actionType';
import {getCategoryListing}  from './categoryLandingPage.api';
import {SubCategory} from './categoryLandingPage.model';

function* getCategoryListSaga({payload}){
	try{
		const subCategoryList: SubCategory = yield call(getCategoryListing,payload);
		yield put({type: actionType.FETCH_SUBCATEGORY_LIST_SUCCESS, subCategoryList});
	}
	catch(error){
		yield put({type: actionType.FETCH_SUBCATEGORY_LIST_FAILURE, error});
	}
}

export default function* watchCategoryList(){
	yield takeLatest(actionType.FETCH_SUBCATEGORY_LIST_REQUEST, getCategoryListSaga);
}