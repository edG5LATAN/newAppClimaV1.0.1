import React from "react";
import "./Minicard.css";

function Minicard({data}) {
  return (
    <div class="card minicard bg-body-secondary">
      <div className="d-flex justify-content-center align-items-center p-2">
        <img
          src={`https://v5i.tutiempo.net/wi/01/90/${data.icon}.png`}
          class="img-fluid"
          alt="dias"
        />
      </div>

      <div class="minicard-contenedor2 card-body">
        <h5 class="card-title">fecha {data.date} </h5>
        <p class="card-text">{data.text}</p>
        <div className="d-flex flex-wrap justify-content-evenly align-items-center">
          <div className="icono_minicard pb-2">
            <p>dir viento</p>
            <img
              src={`https://v5i.tutiempo.net/wd/big/black/${data.icon_wind}.png`}
              alt="viento"
            />
          </div>
          <div className="icono_minicard pb-2">
            <p>fase lunar</p>
            <img src={`https://v5i.tutiempo.net/wmi/02/${data.moon_phases_icon	}.png`} alt="viento" />
          </div>
        </div>
        
        <p class="card-text d-flex">
        <small class="fst-italic text-primary">temp maxima {data.temperature_max}</small>
        <small class="fst-italic text-primary">temp minima {data.temperature_min}</small>
        </p>
      </div>
    </div>
  );
}

export default Minicard;
