import { Request } from 'src/utils/request.js'
import { apiProduct } from 'src/constants/endPoint.js'

export const GetListProductApi = () =>
    Request({
        method: 'get',
        url: apiProduct.getListProducts,
    })
