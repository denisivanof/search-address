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
    building: {
        value: '',
        items: [],
    },
    structure: {
        value: '',
        items: [],
    },
    flat: {
        value: '',
        items: [],
    },
}
export const fetchRegion = createAsyncThunk('region',
    async (query)=> searchAddressApi(query)
)
export const fetchDistrict = createAsyncThunk('district',
    async (query)=>searchAddressApi(query)
)
export const fetchCity = createAsyncThunk('city',
    async (query)=> searchAddressApi(query)
)
export const fetchPlace = createAsyncThunk('place',
    async (query)=>searchAddressApi(query)
)
export const fetchSite = createAsyncThunk('site',
    async (query)=>searchAddressApi(query)
)
export const fetchStreet = createAsyncThunk('street',
    async (query)=>searchAddressApi(query)
)
export const fetchHouse = createAsyncThunk('house',
    async (query)=>searchAddressApi(query)
)
export const fetchBuilding = createAsyncThunk('building',
    async (query)=>searchAddressApi(query)
)
export const fetchStructure = createAsyncThunk('structure',
    async (query)=> searchAddressApi(query)
)
export const fetchFlat = createAsyncThunk('flat',
    async (query)=>searchAddressApi(query)
)
const callback = (state, action) => {
    const type = action.type.split('/')[0]
    state[type].items = action.payload
}
const searchAddressSlice = createSlice({
    name: 'SearchAddress',
    initialState: initState,
    reducers: {
        setRegion(state, action) {state.region.value = action.payload},
        setDistrict(state, action) {state.district.value = action.payload},
        setCity(state, action) {state.city.value = action.payload},
        setPlace(state, action) {state.place.value = action.payload},
        setSite(state, action) {state.site.value = action.payload},
        setStreet(state, action) {state.street.value = action.payload},
        setHouse(state, action) {state.house.value = action.payload},
        setBuilding(state, action) {state.building.value = action.payload},
        setStructure(state, action) {state.structure.value = action.payload},
        setFlat(state, action) {state.flat.value = action.payload},
    },
    extraReducers: (builder => {
        builder.addCase(fetchRegion.fulfilled, callback)
        builder.addCase(fetchDistrict.fulfilled, callback)
        builder.addCase(fetchCity.fulfilled,callback)
        builder.addCase(fetchPlace.fulfilled, callback)
        builder.addCase(fetchSite.fulfilled, callback)
        builder.addCase(fetchStreet.fulfilled, callback)
        builder.addCase(fetchHouse.fulfilled, callback)
        builder.addCase(fetchBuilding.fulfilled, callback)
        builder.addCase(fetchStructure.fulfilled, callback)
        builder.addCase(fetchFlat.fulfilled, callback)
    })
})

export const {setRegion, setDistrict,
    setCity, setPlace,
    setSite,setStreet,
    setHouse, setBuilding, setStructure, setFlat
} = searchAddressSlice.actions

export default searchAddressSlice.reducer