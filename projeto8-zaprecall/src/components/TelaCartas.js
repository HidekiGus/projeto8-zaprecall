import React from "react";

import logo from "../assets/img/logo-pequeno.png";

import setinha from "../assets/img/setinha.png";
import vetor from "../assets/img/Vector.png";

function Carta({ resposta, pergunta, indice }) {

    const [estado, setEstado] = React.useState("titulo");

    function viraPergunta() {
        setEstado("pergunta");
    }

    function viraResposta() {
        setEstado("resposta");
    }

    function viraRespondido() {
        setEstado("respondido");
    }

    return (
        <>
            <div className="carta recursive">
                <div className={`titulo ${(estado === "titulo") ? "" : "escondido"}`} onClick={viraPergunta}>
                    <h1>Pergunta {indice+1}</h1>
                    <img src={vetor}/>
                    {console.log(pergunta)}
                </div>
                <div className={`pergunta ${estado === "pergunta" ? "ativo" : "escondido"}`}>
                    <h1>{pergunta}</h1>
                    <img src={setinha} onClick={viraResposta}/>
                </div>
                <div className={`resposta ${estado === "resposta" ? "ativo" : "escondido"}`}>
                    <h1>{resposta}</h1>
                    <div className="botoes">
                        <div className="botao nao-lembrei">
                            <h1>Não <br></br>lembrei</h1>
                        </div>
                        <div className="botao quase-lembrei">
                            <h1>Quase não lembrei</h1>
                        </div>
                        <div className="botao zap">
                            <h1>Zap!</h1>
                        </div>
                    </div>
                </div>
                <div className={`respondido ${estado === "respondida" ? "ativo" : "escondido"}`}>
                    <img src={setinha} onClick={viraResposta}/>
                </div>
            </div>
        </>
    );
}

function Cartas() {

    const testes = [
        ["O que é JSX ?", "Uma extensão de linguagem do JavaScript"],
        ["O React é __", "uma biblioteca JavaScript para construção de interfaces"],
        ["Componentes devem iniciar com __", "letra maiúscula"],
        ["Podemos colocar __ dentro do JSX", "expressões"],
        ["O ReactDOM nos ajuda __", "interagindo com a DOM para colocar componentes React na mesma"],
        ["Usamos o npm para __", "gerenciar os pacotes necessários e suas dependências"],
        ["Usamos props para __", "passar diferentes informações para componentes"],
        ["Usamos estado (state) para __", "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"]
    ];

    const perguntas = 4;

    let perguntasSelecionadas = []

    function embaralhar() {
        return Math.random() - 0.5;
    }

    testes.sort(embaralhar);

    for (let i=0; i<perguntas; i++) {
        perguntasSelecionadas.push(testes[i]);
    }

    console.log("depois:" + perguntasSelecionadas);

    return (
        <>
            <div className="cartas">
                {perguntasSelecionadas.map((perguntasSelecionada, index) => <Carta key={index} indice={index} pergunta={perguntasSelecionada[0]} resposta={perguntasSelecionada[1]} />)}
            </div>
        </>
    );
}

export default function TelaCartas({ estado }) {

    const[concluidos, setConcluidos] = React.useState(0);
    const[totalConcluidos, setTotalConcluidos] = React.useState(4);

    return (
        <>
            <div className={`tela-cartas ${estado ? "" : "escondido"}`}>
                <div className="logo righteous">
                    <img src={logo} alt="logo-pequeno" />
                    <h1>ZapRecall</h1>
                </div>
                <Cartas />
                <div className="concluidos recursive">
                    <h1>{concluidos}/{totalConcluidos} CONCLUÍDOS</h1>
                </div>
            </div>
        </>
    );
}