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
    const [idGasto, setIdGasto] = useState("0");
    const [eliminado, setEliminado] = useState(false);

    useEffect(() => {
        if (crearGasto) {
            const listadoGasto = [...gastos, gasto];
            setGastos(listadoGasto);

            // Restar presupuesto
            const presupuestoRestante = restante - gasto.cantidadGasto;
            setRestante(presupuestoRestante);

            // Una vez que se agreaga, lo ponemos como false
            setCrearGasto(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [crearGasto]);

    useEffect(() => {
        if (eliminado) {
          // console.log("Objeto a eliminar => " + idGasto);
          const gastoEliminado = gastos.filter(gasto => gasto.id === idGasto);
          const cantidadASumar = gastoEliminado[0].cantidadGasto;
          setRestante(restante + cantidadASumar);
          const gastosRestantes = gastos.filter(gasto => gasto.id !== idGasto);
          setGastos(gastosRestantes);
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idGasto, eliminado]);

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
                                <Listado
                                    gastos={gastos}
                                    setIdGasto={setIdGasto}
                                    setEliminado={setEliminado}
                                />

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
