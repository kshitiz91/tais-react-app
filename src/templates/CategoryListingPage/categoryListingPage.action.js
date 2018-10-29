import * as actionType from './categoryListingPage.actionType';

export const requestSubCategoryListAction = (payload)=>({
	type: actionType.FETCH_SUBCATEGORY_LIST_REQUEST,
	payload
})