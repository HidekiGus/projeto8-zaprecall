import React from "react";

import logo from "../assets/img/logo-pequeno.png";

import setinha from "../assets/img/setinha.png";
import vetor from "../assets/img/Vector.png";

function Carta({ pergunta, indice }) {

    const [estado, setEstado] = React.useState("titulo");

    function viraPergunta() {
        setEstado("pergunta");
        console.log("OII");
    }

    return (
        <>
            <div className="carta recursive">
                <div className={`titulo ${(estado === "titulo") ? "" : "escondido"}`} onClick={viraPergunta}>
                    <h1>Pergunta {indice+1}</h1>
                    <img src={vetor} />
                    {console.log(pergunta)}
                </div>
                <div className={`pergunta ${estado === "pergunta" ? "ativo" : "escondido"}`}>
                    <h1>PERGUNTA AQUII III IIIII III IIIIIIII III IIIIIIIII IIIIII ?</h1>
                    <img src={setinha} />
                </div>
            </div>
        </>
    );
}

function Cartas() {

    const testes = ["a", "b", "c", "d"];

    return (
        <>
            <div className="cartas">
                {testes.map((teste, index) => <Carta key={index} indice={index} pergunta={teste} />)}
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