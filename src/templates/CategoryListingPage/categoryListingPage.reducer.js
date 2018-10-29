import * as actionType from './categoryListingPage.actionType';
import {State} from './categoryListingPage.model';

const initialState: State = [];

export default function categoryListReducer(state = initialState, action){
	switch(action.type){
		case actionType.FETCH_SUBCATEGORY_LIST_SUCCESS :
			return  action.subCategoryList;
		default:
			return state;
	}

}