function Filme({ filme, selecionarFilme, marcarComoAssitido }) {
    return <article className="filme">
        <div>
            <h3>{filme.titulo}</h3>

            <p>
                Genero:
                {filme.genero}
            </p>

            <p>Status:
                {filme.assistido ? "Assistido" : "Quero assistir"}
            </p>
        </div>

        <div className="acoes">
            <button onClick={() => {
                selecionarFilme(filme.id)
            }}>
                Ver detalhes
            </button>

            {
                !filme.assistido && (
                    <button className="secundario"
                    onClick={() => {marcarComoAssitido(filme.id)}}
                    >
                        Marcar como assistido
                    </button>
                )
            }
        </div>
    </article>

}

export default Filme;