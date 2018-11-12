import {takeLatest, put, call} from 'redux-saga/effects';
import * as actionType from './categoryLandingPage.actionType';
import {getCategoryLanding}  from './categoryLandingPage.api';
import {categoryContent} from './categoryLandingPage.model';

function* getCategoryContentSaga({payload}){
	try{
		const categoryContent: categoryContent = yield call(getCategoryLanding,payload);
		yield put({type: actionType.FETCH_CATEGORY_LANDING_SUCCESS, categoryContent});
	}
	catch(error){
		yield put({type: actionType.FETCH_CATEGORY_LANDING_FAILURE, error});
	}
}

export default function* watchCategoryLanding(){
	yield takeLatest(actionType.FETCH_CATEGORY_LANDING_REQUEST, getCategoryContentSaga);
}