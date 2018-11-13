import axios from 'axios';
import * as constant from './apiConstant';


const subCatgApiMap= axios.create({
  baseURL: constant.SUBCATEGORYLIST_API
});

const getCatgList = ( parameters) =>{
    let request=subCatgApiMap.get(constant.SUBCATEGORYLIST_API_ENDPOINT,
        {params: { categoryId : parameters }});
    return request
    .then(result => { console.log(result.data.CO); return result.data.CO; })
    .catch(error => { console.error(error); return Promise.reject(error); });
};

export default getCatgList;