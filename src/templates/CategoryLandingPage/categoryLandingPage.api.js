import axios from 'axios';
import * as constant from './categoryLandingPage.constant';
export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});

export const getCategoryListing = (categoryId)=>{

	return axios.get(constant.SUBCATEGORYLIST_API_ENDPOINT, {
    params: {
      categoryId: categoryId
    }})
		.then((response) => {
			return response.data.CO			
		});
};