import axios from 'axios';

const CUOTAS_API_URL = "http://localhost:8080/Cuotas/";

class CuotasService {

    getCuotasByRut(rut){
        return axios.get(CUOTAS_API_URL + rut);
    }

    getDetailCuota(id){
        return axios.get(CUOTAS_API_URL + "Detail/" + id);
    }

    PayCuota(id){
        return axios.post(CUOTAS_API_URL + "Pay/" + id);
    }

    SaveCuotas(){
        return axios.post(CUOTAS_API_URL + "GuardarCuotas");
    }
}

export default new CuotasService()