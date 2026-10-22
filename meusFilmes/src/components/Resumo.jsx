function Resumo ({
    adultos,
    infantis,
    totalIngressos,
    valorTotal,
    limparPedido
}) {
    return (
        <div className="resumo">
            <p>Adultos: {adultos}</p>
            <p>Infantis: {infantis}</p>

            <p>Total de ingressos: {totalIngressos}</p>

            <strong>
                Total: R$ {valorTotal}
            </strong>

            <button onClick={limparPedido}>
                Limpar pedido
            </button>
        </div>
    );
}

export default Resumo;