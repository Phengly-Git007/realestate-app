import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'b4b124747dmshd61946a76851d34p1505f2jsnedbf9575b114',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
}
