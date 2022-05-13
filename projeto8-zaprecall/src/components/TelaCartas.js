import React from "react";

import logo from "../assets/img/logo-pequeno.png";

export default function TelaCartas({ estado }) {

    const[concluidos, setConcluidos] = React.useState(0);
    const total = 4;

    return (
        <>
            <div className={`tela-cartas ${estado ? "" : "escondido"}`}>
                <div className="logo righteous">
                    <img src={logo} alt="logo-pequeno" />
                    <h1>ZapRecall</h1>
                </div>
                <div className="concluidos recursive">
                    <h1>{concluidos}/{total} CONCLUÍDOS</h1>
                </div>
            </div>
        </>
    );
}