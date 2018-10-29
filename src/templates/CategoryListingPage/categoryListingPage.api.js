import axios from 'axios';
import * as constant from './categoryListingPage.constant';
export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});

export const getCategoryListing = (categoryId)=>{

	return axios.get(constant.SUBCATEGORYLIST_API_ENDPOINT)
		.then((response) => {
			return response.data.CO
		});
};