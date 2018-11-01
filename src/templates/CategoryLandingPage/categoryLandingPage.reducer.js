import * as actionType from './categoryLandingPage.actionType';
import {State} from './categoryLandingPage.model';

const initialState: State = { subCategoryList:[]};

export default function categoryListReducer(state = initialState, action){
	switch(action.type){
		case actionType.FETCH_SUBCATEGORY_LIST_SUCCESS :
			return  {...state , subCategoryList:action.subCategoryList};
		default:
			return state;
	}

}