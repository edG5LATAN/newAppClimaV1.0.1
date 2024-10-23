import React, { useState } from "react";
import "./Cabecera.css";

function Cabecera({convertirFecha ,cambiarImagen,data, position, imagen }) {

  const traerPosition = () => {
    position();
    cambiarImagen()
  };

  return (
    <div class="card text-bg-dark cabecera">
      <h3 className="text-center mb-0">
        {data.locality.country} Clima en {data.locality.name}
      </h3>
      <img
        src={imagen}
        class="card-img"
        alt="imagen de fondo"
      />
      <div class="cabecera_info card-img-overlay">
        <div className="cabecera_info1">
          <h5 class="card-title">Fecha {convertirFecha(data.day1.date)}</h5>
          <div className="d-flex just cabecera_front">
            <div className="p-2">
              <img
                className="img-fluid"
                src={`https://v5i.tutiempo.net/wd/big/black/${data.day1.icon_wind}.png`}
                alt="imagen-viento"
              />
              <p>direccion viento</p>
            </div>
            <div className="p-2">
              <img
                className="img-fluid"
                src={`https://v5i.tutiempo.net/wmi/02/${data.day1.moon_phases_icon}.png`}
                alt="imagen-fase lunar"
              />
              <p>fase lunar</p>
            </div>
          </div>
          <div class="card-text d-flex justify-content-around ">
            <small className="d-flex flex-column bg-body-secondary rounded-3 p-1 m-1 ms-0 ps-0">
              temp max 
              <small>{data.day1.temperature_max}ºC</small> 
            </small>
            <small className="d-flex flex-column bg-body-secondary rounded-3 p-1 m-1 ms-0 ps-0">
              temp min 
              <small>{data.day1.temperature_min}ºC</small>
              </small>
            <small className="d-flex flex-column bg-body-secondary rounded-3 p-1 m-1 ms-0 ps-0">
              amanecer 
              <small>{data.day1.sunrise}AM</small>
              </small>
            <small className="d-flex flex-column bg-body-secondary rounded-3 p-1 m-1 ms-0 ps-0">
              atardecer 
              <small>{data.day1.sunset}PM</small></small>
          </div>
          <button
            onClick={traerPosition}
            className="btn btn-primary cabecera_btn cabecera_boton"
          >
            Ver tu localidad
          </button>
        </div>
        <div className="cabecera_img">
          <img
            className="img-fluid cabecera_conte-img"
            src={`https://v5i.tutiempo.net/wi/01/90/${data.day1.icon}.png`}
            alt="imagen-fondo"
          />
        </div>
      </div>
    </div>
  );
}

export default Cabecera;
