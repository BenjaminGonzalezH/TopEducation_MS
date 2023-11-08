package TopEducation.m2.controller;


import TopEducation.m2.entity.CuotaEntity;
import TopEducation.m2.service.CuotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/Cuotas")
public class CuotaController {
    @Autowired
    CuotaService cuotaService;

    @GetMapping
    public ResponseEntity<ArrayList<CuotaEntity>> ObtenerTodas(){
        ArrayList<CuotaEntity> Cuotas = cuotaService.ObtenerTodas();
        if(Cuotas == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(Cuotas);
    }

    @GetMapping("/{rut}")
    public ResponseEntity<ArrayList<CuotaEntity>> BuscarPorRut(@PathVariable("rut") String rut){
        /*Obtención de cuotas*/
        ArrayList<CuotaEntity> cuotas = cuotaService.ObtenerCuotasPorRutEstudiante(rut);

        /*Verificación de salida*/
        if(cuotas.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        else if(cuotas.get(0).getMeses_atra() == -1){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(cuotas);
    }

    @GetMapping("/Detail/{id}")
    public ResponseEntity<CuotaEntity> getById(@PathVariable("id") Long id) {
        CuotaEntity cuota = cuotaService.BuscarPorID(id);
        if(cuota == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(cuota);
    }

    @PostMapping("/Pay/{id}")
    public ResponseEntity<CuotaEntity> RegistrarPago(@PathVariable("id") Long id){
        /*Búsqueda de Cuota especificada*/
        CuotaEntity cuota = cuotaService.RegistrarEstadoDePagoCuota(id);
        return ResponseEntity.ok(cuota);
    }

    @PostMapping("/GuardarCuotas")
    public ResponseEntity<String> GenerarCuotas(@RequestParam("rut") String rut,
                                @RequestParam("cant_cuotas") Integer cantCuotas,
                                @RequestParam("tipo_pago") String TipoPago) {
        /*Cuota de error*/
        ArrayList<CuotaEntity> cuotas;

        /*Se guardan Cuotas*/
        cuotas = cuotaService.GenerarCuotasDeEstudiante(rut,cantCuotas,TipoPago);

        /*Mensajes de error*/
        if(cuotas.get(0).getMeses_atra() == -1){
            return ResponseEntity.ok("Pago al contado es unico");
        }
        else if(cuotas.get(0).getMeses_atra() == -2){
            return ResponseEntity.ok("Ya hay cuotas asociadas al rut");
        }
        else if(cuotas.get(0).getMeses_atra() == -3){
            return ResponseEntity.ok("Un alumno de un colegio municipal solo " +
                    "opta a máximo 10 cuotas");
        }
        else if(cuotas.get(0).getMeses_atra() == -4){
            return ResponseEntity.ok("Un alumno de un colegio subvencionado solo " +
                    "opta a máximo 7 cuotas");
        }
        else if(cuotas.get(0).getMeses_atra() == -5){
            return ResponseEntity.ok("Un alumno de un colegio privado solo " +
                    "opta a máximo 4 cuotas");
        }
        else if(cuotas.get(0).getMeses_atra() == -6){
            return ResponseEntity.ok("Rut dado no esta registrado");
        }

        return ResponseEntity.ok("Cuotas generadas satisfactoriamente.");
    }
    @PutMapping("/Actualizar")
    public void actualizarCuotas(@RequestBody ArrayList<CuotaEntity> cuotas) {
        cuotaService.ActualizarCuotas(cuotas);
    }
}
