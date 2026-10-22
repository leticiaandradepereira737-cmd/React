// Recebe a prop 'titulo' enviadaa pelo App.js pra exibir o nome da aplicação dinamicamente
function Header({ titulo }) {
  return (
    // Tag semântica do header que fixa o topo da página e aplica as regras de layout do CSS
    <header className="header">
      <div className="marca">
        <div className="marca-icone">AP</div>

        <div>
          {/* Exibe o título dinâmico recebido pela prop */}
          <h1>{titulo}</h1>
          {/* Subtítulo rápido pra reforçar o propósito da ferramenta logo de cara */}
          <p>Organize seu tempo, foque no que importa.</p>
        </div>
      </div>

      {/* Mneu de navegação principal pra rolar a tela direto até cada seção da página */}
      <nav>
        <a href="#inicio">Início</a>
        <a href="#atendimento">Atendimento</a>
        <a href="#servicos">Serviços</a>
        <a href="#profissional">Profissional</a>
      </nav>
    </header>
  );
}

// Exporta o Header pra ser redenrizado no topo da página dentro do App.jsx
export default Header;
