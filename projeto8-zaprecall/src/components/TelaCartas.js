import React from "react";

import logo from "../assets/img/logo-pequeno.png";

import setinha from "../assets/img/setinha.png";
import vetor from "../assets/img/Vector.png";

function Carta(props) {


    return (
        <>
            <div className="carta recursive">
                <h1>
                    Pergunta {props.inde+1}
                </h1>
                <img src={vetor} />
                {console.log(props.pergunta)}
            </div>
        </>
    );
}

function Cartas() {
    const testes = ["a", "b", "c", "d"];

    return (
        <>
            <div className="cartas">
                {testes.map((teste, index) => <Carta key={index} inde={index} pergunta={teste} />)}
            </div>
        </>
    );
}

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
                <Cartas />
                <div className="concluidos recursive">
                    <h1>{concluidos}/{total} CONCLUÍDOS</h1>
                </div>
            </div>
        </>
    );
}