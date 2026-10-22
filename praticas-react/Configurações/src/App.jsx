import { useEffect, useState } from "react";
import Card from "./Components/Card.jsx"
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  const [ultimaAlteracao, setUltimaAlteracao] = useState(
    "Nenhuma alteração ainda",
  );

  useEffect(() => {
    console.log("Painel carregado");
  }, []);

  useEffect(() => {
    // Pegar a data de hoje
    const agora = new Date();

    // Formato para o formato brasileiro de hora 
    setUltimaAlteracao(agora.toLocaleTimeString("pt-BR"));
  }, [contador]);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  function zerar() {
    setContador(0);
  }

  return (
    <main className="app">
      <header className="cabecalho">
        <p className="destaque">Aula 23</p>

        <h1>Painel de Ativiade</h1>

        <p>Exemplo prático de useEffect com useState</p>
      </header>

      <div className="grid">
        <Card titulo="Contador">
          <p className="numero">{contador}</p>

          <div className="botoes">
            <button onClick={diminuir}>Diminuir</button>

            <button onClick={aumentar}>Aumentar</button>
          </div>

          <button className="secundario" onClick={zerar}>
            Zerar contador
          </button>
        </Card>

        <Card titulo="Monitoramento">
          <p>
            Valor atual:
            <strong> {contador} </strong>
          </p>

          <p>
            Última alteração:
            <strong> {ultimaAlteracao} </strong>
          </p>

          {contador === 0 ? (
            <p className="status">O cantador está zerado.</p>
          ) : (
            <p className="status">O contador foi alterado.</p>
          )}
        </Card>
      </div>
    </main>
  );
}

export default App;