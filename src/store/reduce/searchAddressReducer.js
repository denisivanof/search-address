import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchAddressApi} from "../api/searchAddressApi";

const initState = {
    region: {
        value: '',
        items: [],
    },
    district: {
        value: '',
        items: [],
    },
    city: {
        value: '',
        items: [],
    },
    place: {
        value: '',
        items: [],
    },
    site: {
        value: '',
        items: [],
    },
    street: {
        value: '',
        items: [],
    },
    house: {
        value: '',
        items: [],
    },
}
export const fetchRegion = createAsyncThunk(
    'region',
    async (query)=>{
       return  searchAddressApi(query)
    }
)
export const fetchDistrict = createAsyncThunk(
    'district',
    async (query)=>{
        return  searchAddressApi(query)
    }
)
export const fetchCity = createAsyncThunk(
    'city',
    async (query)=>{
        return  searchAddressApi(query)
    }
)
export const fetchPlace = createAsyncThunk(
    'place',
    async (query)=>{
        return  searchAddressApi(query)
    }
)
export const fetchSite = createAsyncThunk(
    'site',
    async (query)=>{
        return  searchAddressApi(query)
    }
)
export const fetchStreet = createAsyncThunk(
    'street',
    async (query)=>{
        return  searchAddressApi(query)
    }
)
export const fetchHouse = createAsyncThunk(
    'house',
    async (query)=>{
        return  searchAddressApi(query)
    }
)
const searchAddressSlice = createSlice({
    name: 'SearchAddress',
    initialState: initState,
    reducers: {
        setRegion(state, action) {
            state.region.value = action.payload
        },
        setDistrict(state, action) {
            state.district.value = action.payload
        },
        setCity(state, action) {
            state.city.value = action.payload
        },
        setPlace(state, action) {
            state.place.value = action.payload
        },
        setSite(state, action) {
            state.site.value = action.payload
        },
        setStreet(state, action) {
            state.street.value = action.payload
        },
        setHouse(state, action) {
            state.house.value = action.payload
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchRegion.fulfilled, ((state, action) => {
            state.region.items = action.payload
        }))
        builder.addCase(fetchDistrict.fulfilled, ((state, action) => {
            state.district.items = action.payload
        }))
        builder.addCase(fetchCity.fulfilled, ((state, action) => {
            state.city.items = action.payload
        }))
        builder.addCase(fetchPlace.fulfilled, ((state, action) => {
            state.place.items = action.payload
        }))
        builder.addCase(fetchSite.fulfilled, ((state, action) => {
            state.site.items = action.payload
        }))
        builder.addCase(fetchStreet.fulfilled, ((state, action) => {
            state.street.items = action.payload
        }))
        builder.addCase(fetchHouse.fulfilled, ((state, action) => {
            state.house.items = action.payload
        }))
    })
})

export const {setRegion, setDistrict, setCity, setPlace, setSite,setStreet, setHouse} = searchAddressSlice.actions

export default searchAddressSlice.reducer