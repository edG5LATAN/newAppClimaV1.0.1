import axios from "axios"

const api=process.env.API_KEY

export const traerData=(latitud,longitud,setdata)=>{
  axios.get(`https://api.tutiempo.net/json/?lan=es&apid=${api}&ll=${latitud},${longitud}`)
  .then(res=>setdata(res.data))
  .catch(error=>console.log(error))

}

