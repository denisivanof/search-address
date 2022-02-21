import axios from "axios";

export const searchAddressApi = async (query) => {
    try {
        const res = await axios.get(`https://www.ahunter.ru/site/suggest/address?output=json&ahungest=3.3&query=${query}&mode=discrete|house|stead&addresslim=10`)
        return res.data.suggestions
    }catch (e) {
        console.log(e)
    }
}