import axios from "axios"



const API_BASE_URL = "http://localhost:5454";
const jwt = localStorage.getItem("jwt");
export const api = axios({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})