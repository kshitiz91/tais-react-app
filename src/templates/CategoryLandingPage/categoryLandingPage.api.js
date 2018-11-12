import axios from 'axios';
import * as constant from './categoryLandingPage.constant';

export const getCategoryLanding = (categoryId)=>{

	return axios.get(constant.CATGEROY_LANDING_API_ENDPOINT, {
    params: {
      categoryId: categoryId
    }})
		.then((response) => {
      return (response.data);	
		});
};