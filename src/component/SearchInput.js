import React, {useEffect, useState} from 'react';
import s from '../Style/SearchInput.module.scss'
import {useDispatch} from "react-redux";


const SearchInput = ({address, value, query, action, fetchAddress , placeholder, nullQuery}) => {
    const[isDropdown, setIsDropdown] =useState(false)
    const dispath = useDispatch()

    useEffect(()=>{
        dispath(fetchAddress(query))
        if(value)(setIsDropdown(true))
        if(!value){
            dispath(fetchAddress(query+nullQuery))
        }
    },[value])

    const onChange = (e) => {
        dispath(action(e.target.value))
    }
    const selectAddress = (item) => {
        dispath(action(item.value))
    }
    const onBlur = ()=> {
        setTimeout(()=>{
            setIsDropdown(false)
        }, 200)
    }
    const onFocus = ()=> {
        setIsDropdown(true)
        console.log(nullQuery)
        if(!value){
            dispath(fetchAddress(query+nullQuery))
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
            {isDropdown?
                <div className={s.select}>
                <ul className={s.selectMenu}>
                    {address.length ? address.map(item=>{
                        return <li onClick={()=>selectAddress(item)} key={item.machine}>{item.value}</li>
                    }) : <li>Нет подходящий подсказки</li>}
                </ul>
            </div>
                : ''}

        </div>
    );
};

export default SearchInput;