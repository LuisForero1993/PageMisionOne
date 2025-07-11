import { useLocation, useParams } from "react-router-dom"

export const Seleccion = () => {
    const params = useParams();
    const state = useLocation().state;

  return (
    <div>
    <br />
    <br />
    <br />
    <h1>Detalle del estudiante</h1>    
    <img src={params.image} alt={params.name} />
    <h2>{params.name}</h2>
    <h4>{state.price}</h4>
    <p>{state.descrption}</p>

    </div>

  )
}

export default Seleccion
