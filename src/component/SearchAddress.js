import React from 'react';
import SearchInput from "./SearchInput";
import {useSelector} from "react-redux";
import {
    fetchCity,
    fetchDistrict, fetchHouse, fetchPlace,
    fetchRegion, fetchSite, fetchStreet,
    setCity,
    setDistrict, setHouse, setPlace,
    setRegion, setSite, setStreet
} from "../store/reduce/searchAddressReducer";


const SearchAddress = () => {
    const itemRegion = useSelector(state => state.searchAddress.region.items)
    const itemDistrict = useSelector(state => state.searchAddress.district.items)
    const itemCity = useSelector(state => state.searchAddress.city.items)
    const itemPlace = useSelector(state => state.searchAddress.place.items)
    const itemSite = useSelector(state => state.searchAddress.site.items)
    const itemStreet = useSelector(state => state.searchAddress.street.items)
    const itemHouse = useSelector(state => state.searchAddress.house.items)

    const region = useSelector(state => state.searchAddress.region.value)
    const district = useSelector(state => state.searchAddress.district.value)
    const city = useSelector(state => state.searchAddress.city.value)
    const place = useSelector(state => state.searchAddress.place.value)
    const site = useSelector(state => state.searchAddress.site.value)
    const street = useSelector(state => state.searchAddress.street.value)
    const house = useSelector(state => state.searchAddress.house.value)

    let queryR = region ? `r[${region}]` : ''
    let queryD = district ? `d[${district}]` : ''
    let queryС = city ? `c[${city}]` : ''
    let queryP = place ? `p[${place}]` : ''
    let queryT = site ? `t[${site}]` : ''
    let queryS = street ? `s[${street}]` : ''
    let queryH = house ? `h[${house}]` : ''

    let query = queryR + queryD + queryС + queryP + queryT + queryS + queryH
    console.log(query)

    let codeD = region ? 'd' : ['r', 'd']
    let codeC = region ? 'c' : ['r', 'd', 'c']
    let codeP = region ? 'p' : ['r', 'd', 'c', 'p']
    let codeT = region ? 't' : ['r', 'd', 'c', 'p', 't']
    let codeS = region ? 's' : ['r', 'd', 'c', 'p', 't', 's']
    let codeH = region ? 'h' : ['r', 'd', 'c', 'p', 't', 's', 'h']

    return (
        <div style={{marginTop: 50, marginLeft: 100}}>
            <SearchInput address={itemRegion} typeInput={'r'} value={region} query={query}
                         action={setRegion} fetchAddress={fetchRegion} placeholder={'Регион'}
                         code={'r'}
            />
            <SearchInput address={itemDistrict} typeInput={'d'} value={district} query={query}
                         action={setDistrict} fetchAddress={fetchDistrict} placeholder={'Район'}
                         nullQuery={'d[]'} code={codeD}
            />
            <SearchInput address={itemCity} typeInput={'c'} value={city} query={query}
                         action={setCity} fetchAddress={fetchCity} placeholder={'Город'}
                         nullQuery={'c[]'} code={codeC}
            />
            <SearchInput address={itemPlace} typeInput={'p'} value={place} query={query}
                         action={setPlace} fetchAddress={fetchPlace} placeholder={'Небольшой населённый пункт'}
                         nullQuery={'p[]'} code={codeP}
            />
            <SearchInput address={itemSite} typeInput={'t'} value={site} query={query}
                         action={setSite} fetchAddress={fetchSite} placeholder={'Территория'}
                         nullQuery={'t[]'} code={codeT}
            />
            <SearchInput address={itemStreet} typeInput={'s'} value={street} query={query}
                         action={setStreet} fetchAddress={fetchStreet} placeholder={'Улица'}
                         nullQuery={'s[]'} code={codeS}
            />
            <SearchInput address={itemHouse} typeInput={'h'} value={house} query={query}
                         action={setHouse} fetchAddress={fetchHouse} placeholder={'Номер дома'}
                         nullQuery={'h[]'} code={codeH}
            />
        </div>
    );
};

export default SearchAddress;