package TopEducation.m3.controller;

import TopEducation.m3.entity.PruebaEntity;
import TopEducation.m3.service.PruebaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

@RestController
@RequestMapping("/Pruebas")
public class PruebaController {
    @Autowired
    PruebaService pruebaService;

    @GetMapping
    public ResponseEntity<ArrayList<PruebaEntity>> ObtenerTodasPruebas(){
        ArrayList<PruebaEntity> Cuotas = pruebaService.ObtenerDatosPruebas();
        if(Cuotas == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(Cuotas);
    }

    @PostMapping("/Upload")
    public String upload(@RequestParam("file") MultipartFile file) {

        pruebaService.GuardarNombreArchivo(file);
        String mensaje = pruebaService.VerificarArchivo("Pruebas.csv");
        if(!mensaje.equals("")) {
            return mensaje;
        }
        else {
            pruebaService.LeerArchivoCsv("Pruebas.csv");
            return "Archivo Subido exitosamente";
        }
    }
}
