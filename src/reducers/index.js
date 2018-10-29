import { combineReducers } from 'redux'
import CategoryListingPage from '../templates/CategoryListingPage/'
import categoryListReducer from '../templates/CategoryListingPage/categoryListingPage.reducer'

const rootReducer = combineReducers({
	[CategoryListingPage.constants.NAME]: categoryListReducer
});

export default rootReducer;