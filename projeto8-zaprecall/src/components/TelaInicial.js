import React from 'react';
import foto1 from "../assets/img/logo.png";

export default function TelaInicial({ estado, mudar }) {


    return (
        <>
            <div className={`tela-inicial righteous ${estado ? "escondido" : ""}`}>
                <img src={foto1} alt="a" />
                <h1>
                    ZapRecall
                </h1>
                <div className="botao-inicio recursive" onClick={mudar}>
                    <h1>Iniciar Recall!</h1>
                </div>
            </div>
        </>
    );
}