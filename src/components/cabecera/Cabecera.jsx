import React, { useState } from "react";
import "./Cabecera.css";

function Cabecera({ data, position }) {

  const [imagen,setimagen]=useState("https://i.pinimg.com/originals/98/19/2f/98192f7719110c037ef789a1426cca37.jpg")

  const cambiarImagen=()=>{
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      setimagen("https://i.pinimg.com/originals/98/19/2f/98192f7719110c037ef789a1426cca37.jpg");
    } else if (hour >= 12 && hour < 18) {
      setimagen("https://i.pinimg.com/originals/b0/52/81/b05281ad26bd8b364b0e5e0ad899c402.jpg");
    } else {
      setimagen("https://i.pinimg.com/originals/21/23/7c/21237c176266e2e032c32b2ae6716a20.jpg");
    }
  }
  

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
          <h5 class="card-title">Fecha {data.day1.date}</h5>
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
            <p className="d-flex flex-column bg-body-secondary rounded-3 p-1 m-1">
              temp max 
              <small>{data.day1.temperature_max}</small> 
            </p>
            <p className="d-flex flex-column bg-body-secondary rounded-3 p-1 m-1">
              temp min 
              <small>{data.day1.temperature_min}</small>
              </p>
            <p className="d-flex flex-column bg-body-secondary rounded-3 p-1 m-1">
              amanecer 
              <small>{data.day1.sunrise}AM</small>
              </p>
            <p className="d-flex flex-column bg-body-secondary rounded-3 p-1 m-1">
              atardecer 
              <small>{data.day1.sunset}PM</small></p>
          </div>
          <button
            onClick={traerPosition}
            className="btn btn-primary cabecera_btn cabecera_boton"
          >
            Estado de Tiempo
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
