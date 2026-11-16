import { useState } from "react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiSave,
  FiX,
} from "react-icons/fi";
import "./App.css";
function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [contatos, setContatos] = useState([
    {
      id: 1,
      nome: "Ana",
      telefone: "(61) 99999-1111",
      email: "ana@email.com",
    },
    {
      id: 2,
      nome: "Carlos",
      telefone: "(61) 99999-2222",
      email: "carlos@email.com",
    },
  ]);
  const [editandoId, setEditandoId] = useState(null);
  function limparCampos() {
    setNome("");
    setTelefone("");
    setEmail("");
  }
  function salvarContato(event) {
    event.preventDefault();
    if (
      nome.trim() === "" ||
      telefone.trim() === "" ||
      email.trim() === ""
    ) {
      return;
    }
    if (editandoId !== null) {
      const contatosAtualizados = contatos.map(
        (contato) => {
          if (contato.id === editandoId) {
            return {
              ...contato,
              nome: nome,
              telefone: telefone,
              email: email,
            };
          }
          return contato;
        }
      );
      setContatos(contatosAtualizados);
      setEditandoId(null);
      limparCampos();
      return;

      const novoContato = {
        id: Date.now(),
        nome: nome,
        telefone: telefone,
        email: email,
      };
      setContatos([
        ...contatos,
        novoContato,
      ]);
      limparCampos();
    }
    function excluirContato(id) {
      const contatosAtualizados = contatos.filter(
        (contato) => contato.id !== id
      );
      setContatos(contatosAtualizados);
    }
    function iniciarEdicao(contato) {
      setEditandoId(contato.id);
      setNome(contato.nome);
      setTelefone(contato.telefone);
      setEmail(contato.email);
    }
    function cancelarEdicao() {
      setEditandoId(null);
      limparCampos();
    }

  }
    return (
      <main className="app">
        <section className="agenda">
          <h1>Lista de Contatos</h1>
          <form onSubmit={salvarContato}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(event) =>
                setNome(event.target.value)
              }
            />
            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(event) =>
                setTelefone(event.target.value)
              }
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />

            <div className="acoes-form">
              <button type="submit">
                {editandoId !== null ? (
                  <>
                    <FiSave />
                    Salvar alterações
                  </>
                ) : (
                  <>
                    <FiPlus />
                    Adicionar contato
                  </>
                )}
              </button>
              {editandoId !== null && (
                <button
                  type="button"
                  onClick={cancelarEdicao}
                >
                  <FiX />
                  Cancelar
                </button>
              )}
            </div>
          </form>
          <section className="lista-contatos">
            {contatos.map((contato) => (
              <article
                className="contato"
                key={contato.id}
              >
                <div>
                  <h2>{contato.nome}</h2>
                  <p>{contato.telefone}</p>
                  <p>{contato.email}</p>
                </div>
                <div className="acoes">
                  <button
                    onClick={() =>
                      iniciarEdicao(contato)
                    }
                  >
                    <FiEdit2 />
                    Editar
                  </button>
                  <button
                    onClick={() =>
                      excluirContato(contato.id)
                    }
                  >
                    <FiTrash2 />
                    Excluir
                  </button>
                </div>
              </article>
            ))}
          </section>
        </section>
      </main>
    );
  }
  export default App;