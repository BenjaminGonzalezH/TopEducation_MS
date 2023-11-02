package TopEducation.m2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EstudiantesModel {
    private Long id_estudiante;
    private String rut;
    private String apellidos;
    private String nombres;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date fecha_nac;

    private String tipo_cole;
    private String nom_cole;
    private int anio_egre;
}
