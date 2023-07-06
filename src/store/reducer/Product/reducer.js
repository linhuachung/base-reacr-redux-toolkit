import { createSlice } from '@reduxjs/toolkit'
import { GetListProducts } from './action.js'

const initialState = {
    productList: {
        data: [],
        pagination: {
            limit: 10,
            page: 1,
            total: 0,
            totalPage: 0,
        },
    },
    loadingProduct: false,
}
const ProductReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(GetListProducts.pending, (state) => ({
            ...state,
            loadingProduct: true,
            productList: initialState.productList,
        }))

        addCase(GetListProducts.fulfilled, (state, { payload }) => ({
            ...state,
            loadingProduct: false,
            productList: {
                data: payload.products,
                pagination: {
                    limit: payload.limit,
                    page: 1,
                    total: payload.total,
                    totalPage: 0,
                },
            },
        }))

        addCase(GetListProducts.rejected, (state) => ({
            ...state,
            loadingProduct: false,
        }))
    },
})

export default ProductReducer.reducer
