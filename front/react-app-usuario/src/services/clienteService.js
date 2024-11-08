import axios from "axios"

const BASE_URL = 'http://localhost:8080/app/clientes';

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-Type": "application/json",
        }
    }
}



export const ClienteSave = async ({ nombre, apellido, email, contrasenia,telefono }) => {
    try {
       
        return await axios.post(`${BASE_URL}/registro-cliente`, {
            nombre, apellido, email, contrasenia,telefono
        }, );
    } catch (error) {
        throw error;
    }
}

