import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchAddressApi} from "../api/searchAddressApi";

const initState = {
    itemRegion: [],
    itemDistrict: [],
    region: '',
    district: '',
}
export const fetchRegion = createAsyncThunk(
    'searchRegion',
    async (query)=>{
       return  searchAddressApi(query)
    }
)
export const fetchDistrict = createAsyncThunk(
    'searchDistrict',
    async (query)=>{
        return  searchAddressApi(query)
    }
)
const searchAddressSlice = createSlice({
    name: 'SearchAddress',
    initialState: initState,
    reducers: {
        setRegion(state, action) {
            state.region = action.payload
        },
        setDistrict(state, action) {
            state.district = action.payload
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchRegion.fulfilled, ((state, action) => {
            state.itemRegion = action.payload
        }))
        builder.addCase(fetchDistrict.fulfilled, ((state, action) => {
            state.itemDistrict = action.payload
        }))
    })
})

export const {setRegion, setDistrict} = searchAddressSlice.actions

export default searchAddressSlice.reducer