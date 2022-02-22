import React, {useEffect, useState} from 'react';
import s from '../Style/SearchInput.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCity, setDistrict, setPlace, setRegion, setSite, setStreet} from "../store/reduce/searchAddressReducer";

const SearchInput = ({address, value, query, action, fetchAddress, placeholder, nullQuery, code, typeInput}) => {

    const [isDropdown, setIsDropdown] = useState(false)
    const [isFocus, setIsFocus] = useState(false)
    const dispath = useDispatch()

    const searchAddress = useSelector(state => state.searchAddress)

    useEffect(() => {
        dispath(fetchAddress(query))
        if (value && isFocus) (setIsDropdown(true))
        if (!value) {
            dispath(fetchAddress(query + nullQuery))
        }
    }, [value])

    const onChange = (e) => {
        dispath(action(e.target.value))
    }
    const selectAddress = (item) => {
        dispath(action(filterItem('r' + item.machine, typeInput)))
        if (!searchAddress.region.value) {
            dispath(setRegion(filterItem('r' + item.machine, 'r')))
        }
        if (!searchAddress.district.value) {
            dispath(setDistrict(filterItem('r' + item.machine, 'd')))
        }
        if (!searchAddress.city.value) {
            dispath(setCity(filterItem('r' + item.machine, 'c')))
        }
        if (!searchAddress.place.value) {
            dispath(setPlace(filterItem('r' + item.machine, 'p')))
        }
        if (!searchAddress.site.value) {
            dispath(setSite(filterItem('r' + item.machine, 't')))
        }
        if (!searchAddress.street.value) {
            dispath(setStreet(filterItem('r' + item.machine, 's')))
        }
    }
    const onBlur = () => {
        setIsFocus(false)
        setTimeout(() => {
            setIsDropdown(false)
        }, 200)
    }
    const onFocus = () => {
        setIsFocus(true)
        setIsDropdown(true)
        if (!value) {
            dispath(fetchAddress(query + nullQuery))
        }
    }

    const filterItem = (machine, code) => {
        if (!Array.isArray(code)) {
            let e = new RegExp(`(([${code}])([А-Яа-я-0-9-(-)-/ - -.:]+))`)
            return machine.match(e) ? machine.match(e)[3].replace(/:/g, ' ') : ''
        }
        if (Array.isArray(code)) {
            let str = ''
            code.forEach((item) => {
                let e = new RegExp(`(([${item}])([А-Яа-я-0-9-(-)-/ - -.:]+))`)
                str += machine.match(e) ? machine.match(e)[3].replace(/:/g, ' ') + ', ' : ''
            })
            return str
        }
    }

    return (
        <div className={s.searchInput}>
            <input placeholder={placeholder}
                   onBlur={onBlur}
                   onFocus={onFocus}
                   className={s.input}
                   value={value}
                   onChange={onChange}/>
            {isDropdown ?
                <div className={s.select}>
                    <ul className={s.selectMenu}>
                        {address.length ? address.map(item => {
                            return <li onClick={() => selectAddress(item)}
                                       key={item.machine}>{filterItem('r' + item.machine, code)}</li>
                        }) : <li>Нет подходящий подсказки</li>}
                    </ul>
                </div>
                : ''}

        </div>
    );
};

export default SearchInput;