import { useState } from "react";

function Carrinho() {
    const [quantidade, setQuantidade] = useState(0);

    const preco = 120;

    const total = quantidade * preco;

    function adicionar() {
        setQuantidade(quantidade + 1);
    }

    function remover() {
        if (quantidade > 0) {
            setQuantidade(quantidade - 1);
        }
    }

    function limpar() {
        setQuantidade(0);
    }

    
    return (
        <section>
            <h2>Carrinho</h2>
            <p>Produto: Mouse Gamer</p>
            <p>Quantidade: {quantidade}</p>

            <button onClick={adicionar}>
                Adicionar
            </button>

            <button onClick={remover}>
                remover
            </button>

            <button onClick={limpar}>
                limpar
            </button>
        </section>
    );
}

export default Carrinho;