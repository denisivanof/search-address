import {configureStore} from "@reduxjs/toolkit";
import searchAddressReduce from './reduce/searchAddressReducer'

export const store = configureStore({
    reducer: {
        searchAddress: searchAddressReduce,
    }
})