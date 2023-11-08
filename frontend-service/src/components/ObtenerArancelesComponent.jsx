import React, { useState, useEffect } from "react";
import '../App.css';
import CuotasService from '../services/ArchivosService';


function ObtenerArancelesComponent() {
    const handleDownloadFileAranceles = async () => {
      try {
        const response = await CuotasService.GenerarPlanillaAranceles();
        const fileUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", "PlanillaAranceles.csv");
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error("Error al obtener el archivo:", error);
      }
    };
  
    useEffect(() => {
        handleDownloadFileAranceles();
    }, []);
  
    return (
        <div>
          <h1>Descargando Planilla de Aranceles</h1>
        </div>
      );
  }
  
  export default ObtenerArancelesComponent;