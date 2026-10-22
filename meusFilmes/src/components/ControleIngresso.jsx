function ControleIngresso ({
    tipo,
    preco,
    quantidade,
    aumentar,
    diminuir
}) {
    return (
        <div className="controle">
            <div>
                <h3>{tipo}</h3>
                <p>Preco: R$ {preco}</p>
            </div>

            <div className="botoes">
                <button onClick={diminuir}>-</button>
                <strong>{quantidade}</strong>
                <button onClick={aumentar}>+</button>
            </div>
        </div>
    );
}

export default ControleIngresso;