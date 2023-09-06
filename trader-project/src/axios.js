import axios from "axios";

const apiStock = axios.create({
    baseURL: 'http://localhost:3000'
})

export default apiStock