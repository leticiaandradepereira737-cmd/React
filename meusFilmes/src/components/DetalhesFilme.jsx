function DetalhesFilme( {filme, fecharDetalhe }) {
  return (
    <section className="detalhes">
        <div className="detalhes-topo">
            <h2>Detalhes do Filme</h2>

            <button className="fechar" onClick={fecharDetalhe}>
                Fechar
            </button>
        </div>

        <p>
            Titulo: 
            {filme.titulo}
        </p>

        <p>
            Genero:
            {filme.genero}
        </p>

        <p>
            Status: 
            {filme.assistido ? "assistido" : "Quero assistir"}
        </p>
    </section>
  );
}

export default DetalhesFilme;