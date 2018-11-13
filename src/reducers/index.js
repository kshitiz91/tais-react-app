import { combineReducers } from 'redux'
import categoryLandingPage from '../templates/CategoryLandingPage/';
import categoryLandingReducer from '../templates/CategoryLandingPage/categoryLandingPage.reducer';
import CategoryListingPage from '../templates/CategoryListingPage/';
import categoryListReducer from '../templates/CategoryListingPage/categoryListingPage.reducer';

const rootReducer = combineReducers({
	[CategoryListingPage.constants.NAME]: categoryListReducer,	
	[categoryLandingPage.constants.NAME]: categoryLandingReducer
});

export default rootReducer;