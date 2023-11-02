package TopEducation.m1.controller;

import TopEducation.m1.entity.EstudiantesEntity;
import TopEducation.m1.service.EstudiantesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/student")
public class EstudiantesController {
    @Autowired
    EstudiantesService estudiantesService;

    @GetMapping
    public ResponseEntity<ArrayList<EstudiantesEntity>> getAllStudents(){
        ArrayList<EstudiantesEntity> Estudiantes = estudiantesService.BuscarTodosEstudiantes();
        if(Estudiantes.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(Estudiantes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EstudiantesEntity> getById(@PathVariable("id") int id) {
        EstudiantesEntity estudiante = estudiantesService.getEstudiantesById(id);
        if(estudiante == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(estudiante);
    }

    @GetMapping("/ByRut/{rut}")
    public ResponseEntity<EstudiantesEntity> getByRut(@PathVariable("rut") String rut) {
        EstudiantesEntity estudiante = estudiantesService.BuscarPorRut(rut);
        if(estudiante == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(estudiante);
    }

    @PostMapping()
    public ResponseEntity<EstudiantesEntity> save(@RequestBody EstudiantesEntity estudiante) {
        EstudiantesEntity estudianteNew = estudiantesService.guardarEstudiantes(estudiante);
        return ResponseEntity.ok(estudianteNew);
    }
}
