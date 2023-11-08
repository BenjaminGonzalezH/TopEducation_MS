import axios from 'axios';

const REPORTES_API_URL = "http://localhost:8080/Reportes/";

class ArchivosService {

    GenerarPlanillaAranceles(){
        return axios.get(REPORTES_API_URL + "Aranceles/");
    }

    GenerarPlanillaPagos() {
        return axios.get(REPORTES_API_URL + "Pagos/");
    }
}

export default new ArchivosService()