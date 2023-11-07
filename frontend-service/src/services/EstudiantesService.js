import axios from 'axios';

const ESTUDIANTE_API_URL = "http://localhost:8080/student/";

class EstudianteService {

    getEstudiantes(){
        return axios.get(ESTUDIANTE_API_URL);
    }

    getEstudianteByID(id){
        return axios.get(ESTUDIANTE_API_URL + id);
    }

    getEstudianteByRut(rut){
        return axios.get(ESTUDIANTE_API_URL+ "ByRut/" + rut);
    }

    createEstudiante(estudiante){
        return axios.post(ESTUDIANTE_API_URL, estudiante);
    }
}

export default new EstudianteService()