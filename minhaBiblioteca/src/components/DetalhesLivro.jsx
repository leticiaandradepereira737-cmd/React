function DetalhesLivro({ livro, fecharDetalhes }) {
  return (
    <section className="detalhes">
        <div className="detalhes-topo">
            <h2>Detalhes do livro</h2>

            <button className="fechar" onClick={fecharDetalhes}>
                Fechar
            </button>
        </div>

        <p>
            <strong>Título:</strong> {livro.titulo}
        </p>

        <p>
            <strong>Autor:</strong> {livro.autor}
        </p>

        <p>
            <strong>Categoria:</strong> {livro.lido ? "Lido" : "Quero ler"}
        </p>
    </section>
  );
}

export default DetalhesLivro;