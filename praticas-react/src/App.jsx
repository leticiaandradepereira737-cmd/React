import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import FormularioTarefa from "./components/FormularioTarefa.jsx";
import ListaTarefas from "./components/ListaTarefas.jsx";
import "./App.css";

function App() {
  const tarefasSalvas = localStorage.getItem("tarefas");

  const tarefasIniciais = tarefasSalvas ? JSON.parse(tarefasSalvas) : [];

  const [texto, setTexto] = useState("");

  const [tarefas, setTarefas] = useState(tarefasIniciais);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa(event) {
    event.preventDefault();

    if (texto.trim() === "") {
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);

    setTexto("");
  }

  function alternarStatus(id) {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida,
        };
      }

      return tarefa;
    });

    setTarefas(tarefasAtualizadas);
  }

  function removerTarefa(id) {
    const tarefasAtualizadas = tarefas.filter((tarefa) => {
      return tarefa.id !== id;
    });

    setTarefas(tarefasAtualizadas);
  }

  return (
    <main className="app">
      <div className="container">
        <Header />

        <FormularioTarefa
          texto={texto}
          setTexto={setTexto}
          adicionarTarefa={adicionarTarefa}
        />

        <div className="resumo">
          <p>
            Total:
            <strong> {tarefas.length}</strong>
          </p>

          <p>
            Concluídas:
            <strong>
              {
                tarefas.filter((tarefa) => {
                  return tarefa.concluida;
                }).length
              }
            </strong>
          </p>
        </div>

        <ListaTarefas
          tarefas={tarefas}
          alternarStatus={alternarStatus}
          removerTarefa={removerTarefa}
        />
      </div>
    </main>
  );
}

export default App;