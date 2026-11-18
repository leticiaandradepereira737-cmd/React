import Livro from "./Livro";

function ListaLivros({ livros, selecionarLivro, marcarComoLido }) {
    if (!livros || livros.length === 0) {
        return <p className="lista-vazia">Nenhum livro encontrado</p>;
    }

    return (
        <section className="lista-livros">
            {livros.map((livro) => (
                <Livro 
                    key={livro.id}
                    livro={livro}
                    selecionarLivro={selecionarLivro}
                    marcarComoLido={marcarComoLido}
                />
            ))}
        </section>
    );
}

export default ListaLivros;