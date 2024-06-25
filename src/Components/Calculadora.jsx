import { useState } from "react";
import styled from "styled-components";

const CalculadoraContainer = styled.div`
    background-color: #ff62ff;
    height: 80vh;
    width: 28%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    h1{
        width: 90%;
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: end;
        font-size: 80px;
        padding-right: 40px;
        background-color: #000000be;
        border-radius: 20px;
    }

    .divEstrelinha{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    h2 {
        font-size: 40px;
        font-family: "Lobster", sans-serif;
        text-shadow: 2px 2px 4px rgba(200, 19, 170, 1),
             10px 2px 9px rgba(0, 0, 0, 0.51);
    }

    img {
        width: 80px;
    }

     /* Responsividade para celulares Android */
    @media (max-width: 400px){
        width: 90%;

        h2{
            font-size: 30px;
        }
    }

    /* Responsividade para celulares Apple */
    @media (max-width: 768px) and (min-width: 400px){
        width: 90%;

        h2{
            font-size: 30px;
        }
    }

    /* Respondividade  para telas de NoteBook ou telas menores.*/
    @media (min-width: 770px) and (max-width: 1300px){
        width: 40%;
        height: 85vh;
    }
`
const BotoesContainer = styled.div`
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90%;
    border-radius: 40px;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    button {
        width: 20%;
        background-color: #00eeff;
        height: 6vh;
        font-size: 35px;
        border-radius: 40%;
        border: solid 2px #00000047;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        cursor: pointer;
        &:hover{
            box-shadow: rgb(137, 145, 151) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
        }
    }
    .ultimosBotoes{
        width: 44%;
        border-radius: 30%;
    }

    /* Responsividade para celulares Android */
    @media (max-width: 400px) {
        button {
            width: 22%;
            font-size: 28px;
        }
    }
    /* Responsividade para celulares Apple */
    @media (max-width: 768px) and (min-width: 400px){
        button {
            width: 22%;
            font-size: 28px;
        }  
    }
`

export default function Calculadora() {


    // Passo a passo
    // 1º Passo: Criar um useState para guardar o nosso número inicial, que é 0.
    const [numero, setNumero] = useState(0);

    // 2º Passo: Criar um useState para guardar o número anterior, iniciado como 0.
    const [numeroAntigo, setNumeroAntigo] = useState(0);

    // 3º Passo: Criar um useState para guardar o operador, iniciado como vazio.
    const [operador, setOperador] = useState("");

    // 4º Passo: Criar uma função para tratar a entrada de números.
    function inputNum(e) {
        let input = e.target.value;

        // Verifica se o número atual é 0 para evitar que o 0 inicial entre no cálculo.
        if (numero === 0) {
            setNumero(input);
        } else {
            setNumero(numero + input);
        }
    }

    // 5º Passo: Criar uma função para resetar o número.
    function reset() {
        setNumero(0);
    }

    // 6º Passo: Criar uma função para calcular a porcentagem.
    function porcentagem() {
        setNumero(parseFloat(numero) / 100);
    }

    // 7º Passo: Criar uma função para definir o operador e armazenar o número anterior.
    function operadores(e) {
        let operadorEscolhido = e.target.value;
        setOperador(operadorEscolhido);
        setNumeroAntigo(numero);
        setNumero(0);
    }

    // 8º Passo: Criar uma função para realizar o cálculo com base no operador.
    function calcular() {
        if (operador === "+") {
            setNumero(parseFloat(numeroAntigo) + parseFloat(numero));
        } else if (operador === "-") {
            setNumero(parseFloat(numeroAntigo) - parseFloat(numero));
        } else if (operador === "x") {
            setNumero(parseFloat(numeroAntigo) * parseFloat(numero));
        } else if (operador === "/") {
            setNumero(parseFloat(numeroAntigo) / parseFloat(numero));
        }
    }

    // Renderização do componente
    return (
        
        <CalculadoraContainer>
                <div className="divEstrelinha">
                    <img src="https://static.vecteezy.com/system/resources/previews/024/781/395/original/cute-star-icon-free-png.png" alt="" />
                    <h2>Vamos Calcular?</h2>
                </div>

                <h1>{numero}</h1>
                <BotoesContainer>
                    
                    <div>
                        <button onClick={reset}>AC</button>
                        <button onClick={porcentagem}>%</button>
                        <button onClick={operadores} value={"/"}>÷</button>
                        <button onClick={operadores} value={"x"}>x</button>
                    </div>
                    <div>
                        <button onClick={inputNum} value={7}>7</button>
                        <button onClick={inputNum} value={8}>8</button>
                        <button onClick={inputNum} value={9}>9</button>
                        <button onClick={operadores} value={"-"}>‒</button>
                    </div>

                    <div>
                        <button onClick={inputNum} value={4}>4</button>
                        <button onClick={inputNum} value={5}>5</button>
                        <button onClick={inputNum} value={6}>6</button>
                        <button onClick={operadores} value={"+"}>+</button>
                    </div>
                    <div>
                        <button onClick={inputNum} value={1}>1</button>
                        <button onClick={inputNum} value={2}>2</button>
                        <button onClick={inputNum} value={3}>3</button>
                        <button onClick={inputNum} value={"."}>,</button>
                    </div>

                    <div>
                        <button className="ultimosBotoes" onClick={inputNum} value={0}>0</button>
                        <button className="ultimosBotoes" onClick={calcular}>=</button>
                    </div>
                </BotoesContainer>
        </CalculadoraContainer>
    );
}