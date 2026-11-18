// Recebe a prop texto para 
function Footer({ texto }) {
  return (
    // Tag que da significado ao footer pra delimitar o rodapé da página e aplicar os estilos do css
    <footer className="footer">
      {/* Lado esquerdo do rodapé: focado na identidade da marca e no slogan */}
      <div>
        <h2>
          Agenda<span>Pro</span>
        </h2>

        {/* Slogan ou frase de efeito que reforça a proposta do projeto */}
        <p>
          Organize seu tempo, foque no que importa.
        </p>
      </div>

      <div className="footer-direita">
        <nav>
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#profissional">Profissional</a>
        </nav>

        <p>{texto}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

// Exporta o Footer pra ser redenrizado na parte inferior do App.jsx
export default Footer;
