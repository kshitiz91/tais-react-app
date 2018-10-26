import * as catActionType from './categoryListingPage.constant';

export const requestProductList = (json)=>({
	type: catActionType.FETCH_PRODUCT_LIST_REQUEST,
	json
})