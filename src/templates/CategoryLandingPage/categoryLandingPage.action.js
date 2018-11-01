import * as actionType from './categoryLandingPage.actionType';

export const requestSubCategoryListAction = (payload)=>({
	type: actionType.FETCH_SUBCATEGORY_LIST_REQUEST,
	payload
})