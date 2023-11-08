import axios from 'axios';

const PRUEBAS_API_URL = "http://localhost:8080/Pruebas/";
const REPORTES_API_URL = "http://localhost:8080/Reportes/";

class ArchivosService {

    VerPruebas(){
        return axios.get(PRUEBAS_API_URL);
    }

    SubirPruebas(archivo){
        return axios.post(PRUEBAS_API_URL + 'Upload/', archivo, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    GenerarPlanillaAranceles(){
        return axios.get(REPORTES_API_URL + "Aranceles/");
    }

    GenerarPlanillaPagos() {
        return axios.get(REPORTES_API_URL + "Pagos/");
    }
}

export default new ArchivosService()