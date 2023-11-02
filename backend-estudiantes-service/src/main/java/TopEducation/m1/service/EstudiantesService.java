package TopEducation.m1.service;


import TopEducation.m1.entity.EstudiantesEntity;
import TopEducation.m1.repository.EstudiantesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class EstudiantesService {
    @Autowired
    EstudiantesRepository EstudiantesRepository;

    public EstudiantesEntity getEstudiantesById(long id){
        return EstudiantesRepository.findById(id).orElse(null);
    }
    public EstudiantesEntity guardarEstudiantes(EstudiantesEntity estudiante){
        return EstudiantesRepository.save(estudiante);
    }

    public ArrayList<EstudiantesEntity> BuscarTodosEstudiantes(){
        return (ArrayList<EstudiantesEntity>) EstudiantesRepository.findAll();
    }

    public EstudiantesEntity BuscarPorRut(String Rut){
        EstudiantesEntity estudiante = EstudiantesRepository.findByRut(Rut);
        return estudiante;
    }
}
