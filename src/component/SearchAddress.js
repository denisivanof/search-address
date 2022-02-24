import React from 'react';
import SearchInput from "./SearchInput";
import {useSelector} from "react-redux";
import {
    fetchBuilding,
    fetchCity,
    fetchDistrict, fetchFlat, fetchHouse, fetchPlace,
    fetchRegion, fetchSite, fetchStreet, fetchStructure, setBuilding,
    setCity,
    setDistrict, setFlat, setHouse, setPlace,
    setRegion, setSite, setStreet, setStructure
} from "../store/reduce/searchAddressReducer";


const SearchAddress = () => {
    const region = useSelector(state => state.searchAddress.region)
    const district = useSelector(state => state.searchAddress.district)
    const city = useSelector(state => state.searchAddress.city)
    const place = useSelector(state => state.searchAddress.place)
    const site = useSelector(state => state.searchAddress.site)
    const street = useSelector(state => state.searchAddress.street)
    const house = useSelector(state => state.searchAddress.house)
    const building = useSelector(state => state.searchAddress.building)
    const structure = useSelector(state => state.searchAddress.structure)
    const flat = useSelector(state => state.searchAddress.flat)

    let queryR = region.value ? `r[${region.value}]` : ''
    let queryD = district.value ? `d[${district.value}]` : ''
    let queryС = city.value ? `c[${city.value}]` : ''
    let queryP = place.value ? `p[${place.value}]` : ''
    let queryT = site.value ? `t[${site.value}]` : ''
    let queryS = street.value ? `s[${street.value}]` : ''
    let queryH = house.value ? `h[${house.value}]` : ''
    let queryB = building.value ? `b[${building.value}]` : ''
    let queryU = structure.value ? `u[${structure.value}]` : ''
    let queryF = flat.value ? `u[${flat.value}]` : ''

    let query = queryR + queryD + queryС + queryP + queryT + queryS + queryH+queryB+queryU+queryF
    console.log(query)

    let codeD = region.value ? 'd' : ['r', 'd']
    let codeC = region.value ? 'c' : ['r', 'd', 'c']
    let codeP = region.value ? 'p' : ['r', 'd', 'c', 'p']
    let codeT = region.value ? 't' : ['r', 'd', 'c', 'p', 't']
    let codeS = region.value ? 's' : ['r', 'd', 'c', 'p', 't', 's']
    let codeH =  'h'
    let codeB =  'b'
    let codeU =  'u'
    let codeF =  'f'

    return (
        <div style={{marginTop: 50, marginLeft: 100}}>
            <SearchInput address={region.items} typeInput={'r'} value={region.value} query={query}
                         action={setRegion} fetchAddress={fetchRegion} placeholder={'Регион'}
                         code={'r'}
            />
            <SearchInput address={district.items} typeInput={'d'} value={district.value} query={query}
                         action={setDistrict} fetchAddress={fetchDistrict} placeholder={'Район'}
                         nullQuery={'d[]'} code={codeD}
            />
            <SearchInput address={city.items} typeInput={'c'} value={city.value} query={query}
                         action={setCity} fetchAddress={fetchCity} placeholder={'Город'}
                         nullQuery={'c[]'} code={codeC}
            />
            <SearchInput address={place.items} typeInput={'p'} value={place.value} query={query}
                         action={setPlace} fetchAddress={fetchPlace} placeholder={'Небольшой населённый пункт'}
                         nullQuery={'p[]'} code={codeP}
            />
            <SearchInput address={site.items} typeInput={'t'} value={site.value} query={query}
                         action={setSite} fetchAddress={fetchSite} placeholder={'Территория'}
                         nullQuery={'t[]'} code={codeT}
            />
            <SearchInput address={street.items} typeInput={'s'} value={street.value} query={query}
                         action={setStreet} fetchAddress={fetchStreet} placeholder={'Улица'}
                         nullQuery={'s[]'} code={codeS}
            />
            <SearchInput address={house.items} typeInput={'h'} value={house.value} query={query}
                         action={setHouse} fetchAddress={fetchHouse} placeholder={'Номер дома'}
                         nullQuery={'h[]'} code={codeH}
            />
            <SearchInput address={building.items} typeInput={'b'} value={building.value} query={query}
                         action={setBuilding} fetchAddress={fetchBuilding} placeholder={'Номер корпуса'}
                         nullQuery={'b[]'} code={codeB}
            />
            <SearchInput address={structure.items} typeInput={'u'} value={structure.value} query={query}
                         action={setStructure} fetchAddress={fetchStructure} placeholder={'Номер строения'}
                         nullQuery={'u[]'} code={codeU}
            />
            <SearchInput address={flat.items} typeInput={'f'} value={flat.value} query={query}
                         action={setFlat} fetchAddress={fetchFlat} placeholder={'Номер квартиры'}
                         nullQuery={'f[]'} code={codeF}
            />
        </div>
    );
};

export default SearchAddress;