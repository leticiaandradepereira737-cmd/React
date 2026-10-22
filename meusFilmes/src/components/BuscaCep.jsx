function BuscaCep({ cep, setCep, buscarCep }) {
    return (
        <div>
            <input
                id="cep"
                type="text"
                plaveholder="ex: 01001000"
                value={cep}
                onChange={(event) => {
                    // Hooks, cep(Vai armazenar o valor que foi digitado), setCep(Vai ter o cvalor do cep, mas vai manipular o valor)
                    setCep(event.target.value);
                }}
            />

            <button onClick={buscarCep}>
                procurar
            </button>
        </div>
    );
}

export default BuscaCep;