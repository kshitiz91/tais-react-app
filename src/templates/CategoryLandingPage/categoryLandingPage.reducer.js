import * as actionType from './categoryLandingPage.actionType';
import {State} from './categoryLandingPage.model';

const initialState: State = { categoryContent:[]};

export default function categoryLandingReducer(state = initialState, action){
	switch(action.type){
		case actionType.FETCH_CATEGORY_LANDING_SUCCESS :
			return  {...state , categoryContent:action.categoryContent};
		default:
			return state;
	}

}