import React, { useState, useEffect } from "react";

// Importamos componentes
import Pregunta from "./Components/Pregunta";
import Formulario from "./Components/Formulario";
import Listado from "./Components/Listado";
import ControlPresupuesto from "./Components/ControlPresupuesto";


function App() {
    // State del componente principal
    const [presupuesto, guardarPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
    const [gasto, setGasto] = useState({});
    const [gastos, setGastos] = useState([]);
    const [crearGasto, setCrearGasto] = useState(false);

    useEffect(() => {
        if (crearGasto) {
            const listadoGasto = [...gastos, gasto];
            setGastos(listadoGasto);

            // Una vez que se agreaga, lo ponemos como false
            setCrearGasto(false);
        }
    }, [crearGasto]);

    return (
        <div className="App container">
            <header>
                <h1>Gasto Semanal</h1>
                <div className="contenido-principal contenido">
                    {preguntaPresupuesto ? (
                        <Pregunta
                            guardarPresupuesto={guardarPresupuesto}
                            guardarPreguntaPresupuesto={
                                guardarPreguntaPresupuesto
                            }
                            setRestante={setRestante}
                        />
                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <Formulario
                                    setGasto={setGasto}
                                    setCrearGasto={setCrearGasto}
                                />
                            </div>
                            <div className="one-half column">
                                <Listado gastos={gastos} />

                                <ControlPresupuesto 
                                  presupuesto={presupuesto}
                                  restante={restante}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
