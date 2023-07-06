import { Request } from '../utils/request.js';
import { apiProduct } from '../constants/endPoint.js';

export const GetListProductApi = () => (
    Request({
        method: 'get',
        url: apiProduct.getListProducts,
    })
)
