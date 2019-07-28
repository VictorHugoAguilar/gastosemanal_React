import React from "react";

// Importamos los componentes necesarios
import Gasto from "./Gasto";

function Listado(props) {
    const { gastos, setIdGasto,setEliminado } = props;



    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto => (
                <Gasto 
                    key={gasto.id} 
                    gasto={gasto}
                    setIdGasto={setIdGasto}
                    setEliminado={setEliminado}       
                />
            ))}
        </div>
    );
}

export default Listado;
