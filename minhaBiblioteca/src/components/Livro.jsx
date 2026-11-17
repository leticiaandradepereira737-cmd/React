function Livro({ livro, selecionarLivro, marcarComoLido }) {
  return (
    <article className="livro">
        <div>
            <h3>{livro.titulo}</h3>
            <p><strong>Autor: </strong>{livro.autor}</p>
            <p><strong>Categoria: </strong>{livro.categoria}</p>
            <p><strong>Status: </strong>{livro.lido ? "Lido" : "Quero ler"}</p>
        </div>

        <div className="acoes">
            <button onClick={() => selecionarLivro(livro.id)}>
                Ver detalhes
            </button>

            {!livro.lido && (
                <button 
                className="secundario"
                onClick={() => marcarComoLido(livro.id)}
                >
                    Marcar como lido
                </button>
            )}
        </div>
    </article>
  );
}

export default Livro;