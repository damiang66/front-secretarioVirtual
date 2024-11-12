import axios from "axios";

const BASE_URL = 'http://localhost:8080/app/admin';
const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-Type": "application/json",
        }
    }
}
export const clienteFindAll = async()=>{
    try {
        const respuesta = await axios.get(`${BASE_URL}/lista-clientes`);
        console.log(respuesta);
        
        return respuesta;
    } catch (error) {
        throw error;
    }
}