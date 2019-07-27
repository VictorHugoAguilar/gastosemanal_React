import React from 'react';

const Gasto = ({gasto}) =>  (
    <li className="gasto">
        <p>{gasto.nombreGasto}</p>
        <span className="gasto">$ {gasto.cantidadGasto}</span>
    </li>

    
);

export default Gasto;