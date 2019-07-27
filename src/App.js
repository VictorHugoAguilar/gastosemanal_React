import React, { useState } from "react";

// Importamos componentes
import Pregunta from "./Components/Pregunta";
import Formulario from "./Components/Formulario";

function App() {
    // State del componente principal
    const [presupuesto, guardarPresupuesto] = useState(0);
    const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);

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
                        />
                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <Formulario />
                            </div>
                            <div className="one-half column">
                                <p>Formulario Aqui</p>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
