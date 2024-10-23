import React, { useEffect, useState } from "react";
import Cabecera from "../cabecera/Cabecera";
import Minicard from "../minicard/Minicard";
import { traerData } from "../../services/Services";

function Home() {
  const api = "4wT44aXaXqXNZ7z";
  let newLatitud = "";
  let newLongitud = "";
  const [imagen,setimagen]=useState("https://i.pinimg.com/originals/98/19/2f/98192f7719110c037ef789a1426cca37.jpg")
  const [latitud, setlatitud] = useState("");
  const [longitud, setlongitud] = useState("");
  const [data, setdata] = useState({
    copyright: "Tutiempo Network, S.L.",
    use: "Se autoriza el uso de estos datos citando a https://www.tutiempo.net como fuente de los mismos.",
    information: {
      temperature: "\u00baC",
      wind: "km/h",
      humidity: "%",
      pressure: "hPa",
    },
    web: "https://www.tutiempo.net",
    language: "es",
    locality: {
      name: "Juticalpa",
      url_weather_forecast_15_days: "https://www.tutiempo.net/juticalpa.html",
      url_hourly_forecast:
        "https://www.tutiempo.net/juticalpa.html?datos=por-horas",
      country: "Honduras",
      url_country: "https://www.tutiempo.net/honduras.html",
    },
    day1: {
      date: "2024-10-18",
      temperature_max: 34.2,
      temperature_min: 23,
      icon: "19",
      text: "Cubierto con lluvias",
      humidity: 68,
      wind: 8,
      wind_direction: "Suroeste",
      icon_wind: "SO",
      sunrise: "5:36",
      sunset: "17:24",
      moonrise: "18:28",
      moonset: "06:42",
      moon_phases_icon: "16",
    },
    day2: {
      date: "2024-10-19",
      temperature_max: 31.3,
      temperature_min: 23.5,
      icon: "19",
      text: "Cubierto con lluvias",
      humidity: 70,
      wind: 10,
      wind_direction: "Sureste",
      icon_wind: "SE",
      sunrise: "5:37",
      sunset: "17:23",
      moonrise: "19:22",
      moonset: "07:47",
      moon_phases_icon: "17",
    },
    day3: {
      date: "2024-10-20",
      temperature_max: 33.2,
      temperature_min: 23.4,
      icon: "19",
      text: "Cubierto con lluvias",
      humidity: 65,
      wind: 7,
      wind_direction: "Sureste",
      icon_wind: "SE",
      sunrise: "5:37",
      sunset: "17:23",
      moonrise: "20:20",
      moonset: "08:52",
      moon_phases_icon: "18",
    },
    day4: {
      date: "2024-10-21",
      temperature_max: 33.8,
      temperature_min: 23.4,
      icon: "19",
      text: "Cubierto con lluvias",
      humidity: 66,
      wind: 7,
      wind_direction: "Sureste",
      icon_wind: "SE",
      sunrise: "5:37",
      sunset: "17:22",
      moonrise: "21:20",
      moonset: "09:57",
      moon_phases_icon: "19",
    },
    day5: {
      date: "2024-10-22",
      temperature_max: 34,
      temperature_min: 23.1,
      icon: "19",
      text: "Muy nuboso con lluvias",
      humidity: 66,
      wind: 5,
      wind_direction: "Sureste",
      icon_wind: "SE",
      sunrise: "5:37",
      sunset: "17:21",
      moonrise: "22:20",
      moonset: "10:56",
      moon_phases_icon: "20",
    },
    day6: {
      date: "2024-10-23",
      temperature_max: 34.2,
      temperature_min: 23.4,
      icon: "19",
      text: "Muy nuboso con lluvias",
      humidity: 65,
      wind: 7,
      wind_direction: "Nordeste",
      icon_wind: "NE",
      sunrise: "5:38",
      sunset: "17:21",
      moonrise: "23:18",
      moonset: "11:50",
      moon_phases_icon: "21",
    },
    day7: {
      date: "2024-10-24",
      temperature_max: 34.1,
      temperature_min: 24.1,
      icon: "19",
      text: "Muy nuboso con lluvias",
      humidity: 62,
      wind: 6,
      wind_direction: "Nordeste",
      icon_wind: "NE",
      sunrise: "5:38",
      sunset: "17:20",
      moonrise: "----",
      moonset: "12:37",
      moon_phases_icon: "22",
    },
    hour_hour: {
      hour1: {
        date: "2024-10-18",
        hour_data: "15:00",
        temperature: 30.4,
        text: "Cubierto con lluvias",
        humidity: 65,
        pressure: 1009,
        icon: "19",
        wind: 6,
        wind_direction: "Suroeste",
        icon_wind: "SO",
      },
      hour2: {
        date: "2024-10-18",
        hour_data: "16:00",
        temperature: 29.7,
        text: "Cubierto con lluvias",
        humidity: 67,
        pressure: 1009,
        icon: "19",
        wind: 3,
        wind_direction: "Sur",
        icon_wind: "S",
      },
      hour3: {
        date: "2024-10-18",
        hour_data: "17:00",
        temperature: 29,
        text: "Cubierto con probabilidad de lluvia",
        humidity: 67,
        pressure: 1011,
        icon: "19",
        wind: 4,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour4: {
        date: "2024-10-18",
        hour_data: "18:00",
        temperature: 28.2,
        text: "Cubierto con probabilidad de lluvia",
        humidity: 69,
        pressure: 1012,
        icon: "19",
        wind: 4,
        wind_direction: "Sur",
        icon_wind: "S",
      },
      hour5: {
        date: "2024-10-18",
        hour_data: "19:00",
        temperature: 28,
        text: "Cubierto con probabilidad de lluvia",
        humidity: 69,
        pressure: 1012,
        icon: "19",
        wind: 3,
        wind_direction: "Suroeste",
        icon_wind: "SO",
      },
      hour6: {
        date: "2024-10-18",
        hour_data: "20:00",
        temperature: 27.7,
        text: "Cubierto con lluvias",
        humidity: 69,
        pressure: 1013,
        icon: "19",
        wind: 4,
        wind_direction: "Suroeste",
        icon_wind: "SO",
      },
      hour7: {
        date: "2024-10-18",
        hour_data: "21:00",
        temperature: 27.5,
        text: "Cubierto con lluvias",
        humidity: 70,
        pressure: 1013,
        icon: "19",
        wind: 3,
        wind_direction: "Suroeste",
        icon_wind: "SO",
      },
      hour8: {
        date: "2024-10-18",
        hour_data: "22:00",
        temperature: 27.3,
        text: "Cubierto con lluvias",
        humidity: 71,
        pressure: 1013,
        icon: "19",
        wind: 0,
        wind_direction: "Oeste",
        icon_wind: "O",
      },
      hour9: {
        date: "2024-10-18",
        hour_data: "23:00",
        temperature: 27.1,
        text: "Cubierto con lluvias",
        humidity: 72,
        pressure: 1013,
        icon: "19",
        wind: 2,
        wind_direction: "Suroeste",
        icon_wind: "SO",
      },
      hour10: {
        date: "2024-10-19",
        hour_data: "0:00",
        temperature: 26.9,
        text: "Cubierto con lluvias",
        humidity: 72,
        pressure: 1012,
        icon: "19",
        wind: 3,
        wind_direction: "Suroeste",
        icon_wind: "SO",
      },
      hour11: {
        date: "2024-10-19",
        hour_data: "1:00",
        temperature: 25.7,
        text: "Cubierto con lluvias",
        humidity: 76,
        pressure: 1012,
        icon: "19",
        wind: 3,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour12: {
        date: "2024-10-19",
        hour_data: "2:00",
        temperature: 24.6,
        text: "Cubierto con lluvias",
        humidity: 81,
        pressure: 1011,
        icon: "19",
        wind: 2,
        wind_direction: "Suroeste",
        icon_wind: "SO",
      },
      hour13: {
        date: "2024-10-19",
        hour_data: "3:00",
        temperature: 23.5,
        text: "Cubierto con lluvias",
        humidity: 86,
        pressure: 1011,
        icon: "19",
        wind: 1,
        wind_direction: "Este",
        icon_wind: "E",
      },
      hour14: {
        date: "2024-10-19",
        hour_data: "4:00",
        temperature: 24.3,
        text: "Cubierto con lluvias",
        humidity: 83,
        pressure: 1011,
        icon: "19",
        wind: 3,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour15: {
        date: "2024-10-19",
        hour_data: "5:00",
        temperature: 25,
        text: "Cubierto con lluvias",
        humidity: 80,
        pressure: 1011,
        icon: "19",
        wind: 3,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour16: {
        date: "2024-10-19",
        hour_data: "6:00",
        temperature: 25.6,
        text: "Cubierto con lluvias",
        humidity: 77,
        pressure: 1012,
        icon: "19",
        wind: 3,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour17: {
        date: "2024-10-19",
        hour_data: "7:00",
        temperature: 26.1,
        text: "Cubierto con lluvias",
        humidity: 76,
        pressure: 1013,
        icon: "19",
        wind: 4,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour18: {
        date: "2024-10-19",
        hour_data: "8:00",
        temperature: 26.5,
        text: "Cubierto con lluvias",
        humidity: 74,
        pressure: 1014,
        icon: "19",
        wind: 3,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour19: {
        date: "2024-10-19",
        hour_data: "9:00",
        temperature: 27,
        text: "Cubierto con lluvias",
        humidity: 73,
        pressure: 1014,
        icon: "19",
        wind: 3,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour20: {
        date: "2024-10-19",
        hour_data: "10:00",
        temperature: 28.4,
        text: "Muy nuboso con lluvias",
        humidity: 67,
        pressure: 1014,
        icon: "19",
        wind: 2,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour21: {
        date: "2024-10-19",
        hour_data: "11:00",
        temperature: 29.9,
        text: "Cubierto con lluvias",
        humidity: 62,
        pressure: 1013,
        icon: "19",
        wind: 4,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour22: {
        date: "2024-10-19",
        hour_data: "12:00",
        temperature: 31.3,
        text: "Cubierto con lluvias",
        humidity: 57,
        pressure: 1012,
        icon: "19",
        wind: 5,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour23: {
        date: "2024-10-19",
        hour_data: "13:00",
        temperature: 30.9,
        text: "Muy nuboso",
        humidity: 59,
        pressure: 1010,
        icon: "6",
        wind: 4,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour24: {
        date: "2024-10-19",
        hour_data: "14:00",
        temperature: 30.6,
        text: "Cubierto con lluvias",
        humidity: 60,
        pressure: 1010,
        icon: "19",
        wind: 10,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
      hour25: {
        date: "2024-10-19",
        hour_data: "15:00",
        temperature: 30.2,
        text: "Cubierto con lluvias",
        humidity: 61,
        pressure: 1010,
        icon: "19",
        wind: 6,
        wind_direction: "Sureste",
        icon_wind: "SE",
      },
    },
  });
  const [update, setupdate] = useState(true);

  navigator.geolocation.getCurrentPosition((position) => {
    newLatitud = position.coords.latitude;
    newLongitud = position.coords.longitude;
    setlatitud(newLatitud);
    setlongitud(newLongitud);
  });

  const position = () => {
     traerData(latitud,longitud,setdata)
     setupdate(!update)
  };


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

    const convertirFecha = (fecha) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(fecha).toLocaleDateString('es-ES', options);
    };


  useState(()=>{

  },update)

  return (
    <div className="container">
      <Cabecera convertirFecha={convertirFecha} cambiarImagen={cambiarImagen} data={data} position={position} imagen={imagen} />
      <div className="mt-2 d-flex justify-content-evenly align-items-center flex-wrap">
        <Minicard convertirFecha={convertirFecha} data={data.day2 } imagen={imagen}/>
        <Minicard convertirFecha={convertirFecha} data={data.day3} imagen={imagen}/>
        <Minicard convertirFecha={convertirFecha} data={data.day4} imagen={imagen}/>
        <Minicard convertirFecha={convertirFecha} data={data.day5} imagen={imagen}/>
        <Minicard convertirFecha={convertirFecha} data={data.day6} imagen={imagen}/>
        <Minicard convertirFecha={convertirFecha} data={data.day7} imagen={imagen}/>
      </div>
    </div>
  );
}

export default Home;
