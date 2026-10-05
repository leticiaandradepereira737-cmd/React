import { useState } from "react";
import CardConfiguracao from "./Components/CardConfiguracao"; 
import './App.css'


function App() {
  const [notificacoes, setNotificacoes] = useState(true)
  const [temaEscuro, setTemaEscuro] = useState(true)
  const [perfilVisivel, setPerfilVisivel] = useState(true)

  console.log("notificação:", notificacoes)

  function alterarNotificacao() {
    setNotificacoes(!notificacoes)
  }

  function alterarTema() {
    setTemaEscuro(!temaEscuro)
  }

  function alterarPerfil() {
    setPerfilVisivel(!perfilVisivel)
  }

  return (
    <div>
      <main className={temaEscuro ? 'app escuro' : 'app claro'}>
        <h1>Painel de configurações</h1>

        <CardConfiguracao titulo={notificacoes}>
          <p>Status: {notificacoes ? "Ativadas" : "Desativadas"}</p>

          <button onClick={alterarNotificacao}>{notificacoes ? "Ativar" : "Desativar"}</button>
        </CardConfiguracao>

        <CardConfiguracao titulo={'Tema'}>
          <p>Tem atual {temaEscuro ? 'Escuro' : 'Claro'}</p>
          <button onClick={alterarTema}>Alterar tema</button>
        </CardConfiguracao>

        <CardConfiguracao titulo={'Perfil'}>
          <p>Status:  {perfilVisivel ? 'Esconder perfil' : 'Mostrar perfil'}</p>
          <button onClick={alterarPerfil}>
            {perfilVisivel ? "Escopnder perfil" : "Mostrar perfil"}
          </button>

          {perfilVisivel && (
            <div className="perfil">
              <h3>Perfil do usuário</h3>
              <p>Estudante React</p>
            </div>
          )}
        </CardConfiguracao>
      </main>
    </div>
  )

}

export default App;