import React, { useState } from "react";
import shortid from 'shortid';

// Importamos componentes
import Error from './Error';

function Formulario(props) {

    const { setGasto, setCrearGasto  } = props;

    // Inicializamos los state
    const [nombreGasto, setNombreGasto] = useState("");
    const [cantidadGasto, setCantidadGasto] = useState(0);
    const [error, setError] = useState(false);

    // Cuando se agrega el gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if (
            cantidadGasto < 1 ||
            isNaN(cantidadGasto) ||
            nombreGasto === "" ||
            nombreGasto.length === 0
        ) {
            setError(true);
            return;
        }

        // construir objeto de gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        console.log(gasto)
        // pasar el gasto al componente principal
        setGasto(gasto);
        
        setCrearGasto(true);

        // Eliminar alerta
        setError(false);

        // Resetear el form
        setNombreGasto('');
        setCantidadGasto('');
    };

    return (
        <form onSubmit={agregarGasto}>
            <h2>Añade los gastos</h2>
            
            {error ? (
                <Error mensaje={'Ambos campos son obligatorios '} />
            ) : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => setNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e =>
                        setCantidadGasto(parseInt(e.target.value, 10))
                    }
                    value={cantidadGasto}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

export default Formulario;
