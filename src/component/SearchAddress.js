import React from 'react';
import SearchInput from "./SearchInput";
import {useSelector} from "react-redux";
import {fetchDistrict, fetchRegion, setDistrict, setRegion} from "../store/reduce/searchAddressReducer";


const SearchAddress = () => {

    const itemRegion = useSelector(state => state.searchAddress.itemRegion)
    const itemDistrict = useSelector(state => state.searchAddress.itemDistrict)
    const region = useSelector(state => state.searchAddress.region)
    const district = useSelector(state => state.searchAddress.district)

    let queryR = region ? `r[${region}]`: ''
    let queryD = district ? `d[${district}]`:  ''

    let query = queryR+queryD
    console.log(query)
    return (
        <div style={{marginTop: 50, marginLeft: 100 }}>
           <SearchInput address={itemRegion} value={region} query={query} action={setRegion} fetchAddress={fetchRegion}/>

           <SearchInput address={itemDistrict} value={district} query={query} action={setDistrict} fetchAddress={fetchDistrict}/>
        </div>
    );
};

export default SearchAddress;