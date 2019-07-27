import React from "react";

const Gasto = ({ gasto }) => (
    <li className="gasto">
        <p>{gasto.nombreGasto}
        <span className="gasto">$ {gasto.cantidadGasto}</span></p>
    </li>
);

export default Gasto;
