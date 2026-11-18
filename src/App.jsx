import { useState } from "react"
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiSave,
  FiX,
} from "react-icons/fi";
import "./App.css";

function App() {

  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [nota, setNota] = useState("");
  const [urlImagem, setUrlImagem] = useState("");

  const [filmes, setFilmes] = useState([
    {
      id: 1,
      titulo: "Interestelar",
      genero: "Ficção Científica",
      ano: "2014",
      nota: "9.5",
      urlImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3p5RkCeya1-d0BSmOSvKZuWA0gEVLq4uz0Eu0xpgpWA&s=10",
    },
    {
      id: 2,
      titulo: "A Rede Social",
      genero: "Drama / Tecnologia",
      ano: "2010",
      nota: "9.1",
      urlImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2vaUenTQI8EyomjqWbPH4-ni_ILXaGBwGWgnv8YvDg&s=10",
    },
  ]);

  const [editandoId, setEditandoId] = useState(null);

  function limparCampos() {
    setTitulo("");
    setGenero("");
    setAno("");
    setNota("");
    setUrlImagem("");
  }

  function salvarFilme(event) {
    event.preventDefault();

    if (titulo.trim() === "") {
      return;
    }

    if (editandoId !== null) {
      const filmesAtulizados = filmes.map((filme) => {
        if (filme.id === editandoId) {
          return {
            ...filme,
            titulo: titulo,
            genero: genero,
            ano: ano,
            nota: nota,
            urlImagem: urlImagem,
          };
        }
        return filme;
      });
      setFilmes(filmesAtulizados);
      setEditandoId(null);
      limparCampos();
      return;
    }

    const novoFilme = {
      id: Date.now(),
      titulo: titulo,
      genero: genero,
      ano: ano,
      nota: nota,
      urlImagem: urlImagem,
    };

    setFilmes([...filmes, novoFilme]);
    limparCampos();
  }

  function excluirFilme(id) {
    const filmesAtulizados = filmes.filter((filme) => filme.id !== id);
    setFilmes(filmesAtulizados);
  }

  function iniciarEdicao(filme) {
    setEditandoId(filme.id);
    setTitulo(filme.titulo);
    setGenero(filme.genero);
    setAno(filme.ano);
    setNota(filme.nota);
    setUrlImagem(filme.urlImagem);
  }

  function cancelarEdicao() {
    setEditandoId(null);
    limparCampos();
  }

  return (
    <main className="app">
      <section className="catalogo">
        <h1>Catálogo de Filmes</h1>

        <form onSubmit={salvarFilme}>
          <input 
          type="text"
          placeholder="Título do filme"
          value={titulo}
          onChange={(event) => 
            setTitulo(event.target.value)
          } 
          />
          <input 
          type="text"
          placeholder="Gênero"
          value={genero}
          onChange={(event) => 
            setGenero(event.target.value)
          } 
          />
          <input 
          type="text"
          placeholder="Ano"
          value={ano}
          onChange={(event) => 
            setAno(event.target.value)
          } 
          />
          <input 
          type="text"
          placeholder="Nota"
          value={nota}
          onChange={(event) => 
            setNota(event.target.value)
          } 
          />
          <input 
          type="text"
          placeholder="URL da imagem"
          value={urlImagem}
          onChange={(event) => 
            setUrlImagem(event.target.value)
          } 
          />

          <div className="acoes-form">
            <button type="submit">
              {editandoId !== null ? (
                <>
                <FiSave /> Salvar Alterações
                </>
              ) : (
                <>
                <FiPlus /> Cadastrar Filme
                </>
              )}
            </button>

            {editandoId !== null && (
              <button type="button" onClick={cancelarEdicao}>
                <FiX /> Cancelar
              </button>
            )}
          </div>
        </form>

        <section className="lista-filmes">
          {filmes.map((filme) => (
            <article className="card-filme" key={filme.id}>
              {filme.urlImagem && (
                <img src={filme.urlImagem} alt={filme.titulo} />
              )}
              <div className="info-filme">
                <h2>{filme.titulo}</h2>
                <p><strong>Gênero:</strong>{filme.genero}</p>
                <p><strong>Ano:</strong>{filme.ano}</p>
                <p><strong>Nota:</strong>{filme.nota}</p>
              </div>

              <div className="acoes">
                <button onClick={() => iniciarEdicao(filme)}>
                  <FiEdit2 /> Editar
                </button>
                <button onClick={() => excluirFilme(filme.id)}>
                  <FiTrash2 /> Excluir
                </button>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}

export default App;