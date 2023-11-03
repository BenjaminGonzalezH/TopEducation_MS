package TopEducation.m3.controller;

import TopEducation.m3.service.ReportesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Reportes")
public class ReportesController {
    @Autowired
    ReportesService reportesService;

    @GetMapping("/Aranceles")
    public ResponseEntity<byte[]> GenerarPlanillaAranceles() {
        ResponseEntity<byte[]> response = reportesService.ArchivoPlannillaAranceles();

        // Verificar si el servicio generó el archivo correctamente
        if (response.getStatusCode() == HttpStatus.OK) {
            return response;
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/Pagos")
    public ResponseEntity<byte[]> ResumenEstadoPagos() {
        ResponseEntity<byte[]> response = reportesService.ResumenEstadoDePagos();

        // Verificar si el servicio generó el archivo correctamente
        if (response.getStatusCode() == HttpStatus.OK) {
            return response;
        } else {
            // Manejo de errores aquí, por ejemplo, redireccionar a una página de error
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
