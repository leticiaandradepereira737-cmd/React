function Resultado({ endereco }) {
    if (!endereco) {
        return null
    }

    const { cep, logradouro, bairro, localidade, uf } = endereco;

    return (
        <div>
            <h2>Endereço Encontrado</h2>
            <p>Cep: {cep}</p>
            <p>Rua: {logradouro}</p>
            <p>Bairro: {bairro}</p>
            <p>Cidade: {localidade}</p>
            <p>UF: {uf}</p>
        </div>
    );
}

export default Resultado;