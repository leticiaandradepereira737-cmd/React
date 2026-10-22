import { useState } from "react";

const [numero, setNumero] = useState(0);

function Contador() {

    function aumentar() {
        console.log("Botão foi clicado")
    }

    let numero = 0;

    function aumentar() {
        setNumero(numero + 1);

        console.log(numero);
    }

    function diminuir() {
        setNumero(numero - 1);
    }

    function zerar() {
        setNumero(0);
    }


    return (
        <section>
            <h2>Contador</h2>

            <p>Valor: {numero}</p>

            <button onClick={aumentar}>
                Aumentar
            </button>
            <button onClick={diminuir}>
                Diminuir
            </button>
            <button onClick={zerar}>
                Zerar
            </button>
        </section>
    );
}

export default Contador;