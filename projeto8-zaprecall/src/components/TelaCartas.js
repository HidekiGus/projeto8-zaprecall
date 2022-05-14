import React from "react";

import logo from "../assets/img/logo-pequeno.png";

import sad from "../assets/img/sad.png";
import party from "../assets/img/party.png";
import setinha from "../assets/img/setinha.png";
import vetor from "../assets/img/Vector.png";

import laranja from "../assets/img/laranja.png";
import vermelho from "../assets/img/vermelho.png";
import verde from "../assets/img/verde.png";


function Carta({ resposta, pergunta, indice, aumentarConcluidos, aumentarVermelhos }) {

    const [imagem, setImagem] = React.useState();
    const [estado, setEstado] = React.useState("titulo");
    const [cor, setCor] = React.useState("");

    function viraPergunta() {
        setEstado("pergunta");
    }

    function viraResposta() {
        setEstado("resposta");
    }

    function viraRespondidoVermelho() {
        setEstado("respondido");
        setImagem(vermelho);
        setCor("vermelho");
        aumentarConcluidos(vermelho);
        aumentarVermelhos();
    }

    function viraRespondidoLaranja() {
        setEstado("respondido");
        setImagem(laranja);
        setCor("laranja");
        aumentarConcluidos(laranja);
    }

    function viraRespondidoVerde() {
        setEstado("respondido");
        setImagem(verde);
        setCor("verde");
        aumentarConcluidos(verde);
    }

    function daOi() {
        console.log("OI")
    }




    return (
        <>
            <div className="carta recursive ">
                <div className={`titulo ${(estado === "titulo") ? "" : "escondido"}`} onClick={(estado === "respondido") ? daOi : viraPergunta}>
                    <h1>Pergunta {indice+1}</h1>
                    <img src={vetor}/>
                </div>
                <div className={`pergunta ${estado === "pergunta" ? "ativo" : "escondido"}`}>
                    <h1>{pergunta}</h1>
                    <img src={setinha} onClick={viraResposta}/>
                </div>
                <div className={`resposta ${estado === "resposta" ? "ativo" : "escondido"}`}>
                    <h1>{resposta}</h1>
                    <div className="botoes">
                        <div className="botao vermelho" onClick={viraRespondidoVermelho}>
                            <h1>Não <br></br>lembrei</h1>
                        </div>
                        <div className="botao laranja" onClick={viraRespondidoLaranja}>
                            <h1>Quase não lembrei</h1>
                        </div>
                        <div className="botao verde" onClick={viraRespondidoVerde}>
                            <h1>Zap!</h1>
                        </div>
                    </div>
                </div>
                <div className={`respondido ${estado === "respondido" ? "ativo" : "escondido"} ${cor}`}>
                    <h1>Pergunta {indice+1}</h1>
                    <img src={imagem}/>
                </div>
            </div>
        </>
    );
}

function Cartas({concluidos, setConcluidos, imagemConcluidos, setImagemConcluidos, totalVermelhos, setTotalVermelhos}) {

    const deck = [
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

    deck.sort(embaralhar);

    for (let i=0; i<perguntas; i++) {
        perguntasSelecionadas.push(deck[i]);
    }

    function aumentarConcluidos(cor) {
        setConcluidos(concluidos + 1);
        setImagemConcluidos([...imagemConcluidos, cor]);
    }

    function aumentarVermelhos() {
        setTotalVermelhos(totalVermelhos + 1);
    }

    return (
        <>
            <div className="cartas">
                {perguntasSelecionadas.map((perguntasSelecionada, index) => <Carta key={index} indice={index} pergunta={perguntasSelecionada[0]} resposta={perguntasSelecionada[1]} aumentarConcluidos={aumentarConcluidos} aumentarVermelhos={aumentarVermelhos}/>)}
            </div>
        </>
    );
}

export default function TelaCartas({ estado }) {

    const[imagemConcluidos, setImagemConcluidos] = React.useState([]);
    const[concluidos, setConcluidos] = React.useState(0);
    const[totalConcluidos, setTotalConcluidos] = React.useState(4);
    const[totalVermelhos, setTotalVermelhos] = React.useState(0);

    return (
        <>
            <div className={`tela-cartas ${estado ? "" : "escondido"}`}>
                <div className="logo righteous">
                    <img src={logo} alt="logo-pequeno" />
                    <h1>ZapRecall</h1>
                </div>
                <Cartas concluidos={concluidos} setConcluidos={setConcluidos} imagemConcluidos={imagemConcluidos} setImagemConcluidos={setImagemConcluidos} totalVermelhos={totalVermelhos} setTotalVermelhos={setTotalVermelhos}/>
                <div className="concluidos recursive">
                    {(concluidos === 4) ? 
                    <>
                        <div className="resultado">
                            {(totalVermelhos === 0) ?
                            <>
                                <div>
                                    <img src={party} />
                                    <span>Parabéns!</span>
                                </div>
                                <h1>
                                    Você não esqueceu de <br></br> nenhum flashcard!
                                </h1>
                            </> :
                            <>
                                <div>
                                    <img src={sad} />
                                    <span>Putz...</span>
                                </div>
                                <h1>
                                    Ainda faltam alguns... <br></br> Mas não desanime!
                                </h1>
                            </>
                            }
                            
                        </div>
                    </> : <></>}
                    <h1>{concluidos}/{totalConcluidos} CONCLUÍDOS</h1>
                    {(concluidos > 0) ? 
                    <>
                        <div className="icones-concluidos">
                            {imagemConcluidos.map(imagemConcluido => <img src={imagemConcluido} />)}
                        </div>
                    </> : <></>}
                </div>
            </div>
        </>
    );
}