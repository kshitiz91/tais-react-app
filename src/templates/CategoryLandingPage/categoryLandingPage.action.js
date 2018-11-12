import * as actionType from './categoryLandingPage.actionType';

export const requestCategoryLandingAction = (payload)=>({
	type: actionType.FETCH_CATEGORY_LANDING_REQUEST,
	payload
})