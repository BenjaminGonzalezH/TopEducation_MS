package TopEducation.m3.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CuotasModel {
    private Long id_cuota;
    private Long id_estudiante;
    private Float monto_primario;
    private String tipo_pag;
    private String estado;
    private Float monto_pagado;
    private LocalDate fecha_crea;
    private LocalDate fecha_pago;
    private Integer meses_atra;
}
