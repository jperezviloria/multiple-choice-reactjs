import axios from "axios"

const HttpClient = axios.create({
    baseURL: "http://localhost:3005",
    //baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 100000,
    headers:{
        "Content-Type":"application/json"
    }
});