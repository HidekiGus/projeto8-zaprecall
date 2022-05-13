import ReactDOM from "react-dom";
import React from 'react';

import "./assets/css/reset.css";
import "./assets/css/styles.css";
import TelaInicial from "./components/TelaInicial";
import TelaCartas from "./components/TelaCartas";


function App() {
    const [estado, setEstado] = React.useState(false);

    console.log(estado)

    function mudar() {
        setEstado(true);
    }

    return (
    <>
        <TelaInicial estado={estado} mudar={mudar}/>
        <TelaCartas estado={estado}/>
    </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));