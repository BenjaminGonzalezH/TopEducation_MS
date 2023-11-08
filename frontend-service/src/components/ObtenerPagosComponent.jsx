import React, { useState, useEffect } from "react";
import '../App.css';
import CuotasService from '../services/ArchivosService';


function ObtenerPagosComponent() {
    const handleDownloadFilePagos = async () => {
      try {
        const response = await CuotasService.GenerarPlanillaPagos();
        const fileUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", "Reporte.csv");
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error("Error al obtener el archivo:", error);
      }
    };
  
    useEffect(() => {
        handleDownloadFilePagos();
    }, []);
  
    return (
        <div>
          <h1>Descargando Reporte de estado de pagos</h1>
        </div>
      );
  }
  
  export default ObtenerPagosComponent;