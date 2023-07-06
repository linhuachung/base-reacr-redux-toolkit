import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetListProductApi } from '../../../apis/product.js';

const keyReducer = {
    getList: 'product/getList'
}

const GetListProducts = createAsyncThunk(keyReducer.getList, async (data) => {
    const res = await GetListProductApi(data)
    console.log(res)
    return res
})

export {
    GetListProducts
}
