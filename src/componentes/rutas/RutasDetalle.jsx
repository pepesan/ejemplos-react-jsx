import {Link, useParams, useNavigate} from "react-router-dom";

export default function RutasDetalle() {
    let params = useParams();
    let navigate = useNavigate();
    const handleClick = () => navigate("../rutas", { replace: true });
    return (
        <div>
            <Link to={`/rutas`}>Volver</Link>
            <h2>Detalle: {params.itemId}</h2>
            <button type="button" onClick={handleClick}>
                Volver Programáticamente
            </button>
        </div>
    );
}