import Filme from "./Filme"

function ListaFilmes({filmes, selionarFilme, marcarComoAssistido}) {
    if(filmes.lenght === 0) {
        return <p className="lista-vazia">Nenhum filme encontarado</p>
    }
  return (
    <section className="lista-filmes">
        {filmes.map((filme) => {
            return (
                <Filme 
                key={filme.id}
                filme={filme}
                selecionarFilme={selecionarFilme}
                marcarComoAssitido={marcarComoAssistido}
                />
            )
        })}
    </section>
  )
}

export default ListaFilmes