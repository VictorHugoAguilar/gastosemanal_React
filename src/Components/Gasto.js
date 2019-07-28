import React from "react";

const Gasto = (props) => {
    
    const { gasto, setIdGasto, setEliminado } = props;

    
    const eliminaGasto = id => {
        // console.log(id);
        setEliminado(true);
        setIdGasto(id);
    };

    return (
        <li className="gasto">
            <p>
                {gasto.nombreGasto}
                <span className="gasto">$ {gasto.cantidadGasto}</span>
                <button type="button" onClick={() => eliminaGasto(gasto.id)}>
                    Eliminar
                </button>
            </p>
        </li>
    );
};

export default Gasto;
