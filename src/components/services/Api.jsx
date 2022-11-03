import axios from "axios";

const url = "http://192.168.123.7:3001/products"

export const getProducts = async() =>{
    try{
        return await axios.get(`${url}`)
    }catch(error){
        console.log(`Opps!! There is an Error while Fetching The data & The Error code is "${error.message}"`);
    }
}

export const getSingleProducts = async(id) =>{
    try{
        return await axios.get(`${url}/${id}`)
    }catch(error){
        console.log(`Opps!! There is an Error while Fetching The data & The Error code is "${error.message}"`);
    }
}

export const addProduct = async(product) =>{
    try{
        return await axios.post(url , product)
    }catch(error){
        console.log(`Opps!! There is an Error while Fetching The data & The Error code is "${error.message}"`);
    }
}
