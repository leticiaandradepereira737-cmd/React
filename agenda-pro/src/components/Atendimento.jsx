// Recebe a propriedade 'atendimento' pra montar o card de detalhes da consulta 
function Atendimento({ atendimento }) {

  // Desestrutura o objeto 'atendimento' para extrair direto cada informação
  const {
    cliente,
    servico,
    data,
    horario,
    modalidade,
    valor,
    pago,
    observacao
  } = atendimento;

  // Uma função que auxilia para traduzir o valor booleano de 'pago' em um texto legívwl pro usuário
  function verificarPagamento(pago) {
    if (pago) {
      return "Pagamento confirmado";
    }

    return "Pagamento pendente";
  }

  // Define o informativo de acordo com o tipo de atendimento, se vai ser online ou presencial
  function verificarModalidade(modalidade) {
    if (modalidade === "Online") {
      return "O atendimento será realizado por videochamada.";
    }

    return "O atendimento será realizado presencialmente.";
  }

  //Executa as verificações e guarda os textos resultantes em variaveis, prontas para serem renderizadas abaixo
  const statusPagamento =
    verificarPagamento(pago);

  const statusModalidade =
    verificarModalidade(modalidade);

  return (
    //Bloco principal que envolve todo o crad do atendimento atual no painel
    <section
      className="atendimento"
      id="atendimento"
    >
      {/* Cabeçalho do card com ícone, título e a tag com a data atual em destaque */}
      <div className="secao-titulo">
        <span className="secao-icone">A</span>
        <h2>Próximo atendimento</h2>
        <span className="data-destaque">
          Hoje, 25 de setembro
        </span>
      </div>
      {/* Conteúdo principal com informações do cliente e da consulta */}
      <div className="atendimento-conteudo">
        <div className="cliente">
          <div className="avatar-cliente">
            {cliente.charAt(0)}
          </div>

          <div>
            <h3>{cliente}</h3>
            <p>{servico}</p>
          </div>
        </div>

        {/* Módulo de detalhes específicos horário, valor e modalidade */}
        <div className="detalhes-atendimento">
          <div>
            <p><strong>Data:</strong> {data}</p>
            <p><strong>Horário:</strong> {horario}</p>
            <p><strong>Modalidade:</strong> {modalidade}</p>
            <p><strong>Valor:</strong> R$ {valor}</p>

            {/* Destaque visual do status financeiro da consulta  */}
            <div className="pagamento">
              <strong>{statusPagamento}</strong>
              <span>O pagamento já foi realizado.</span>
            </div>
          </div>

          <div className="modalidade-box">
            <span className="video-icone">▶</span>
            <strong>{statusModalidade}</strong>
            <p>{observacao}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Exporta o componente para poder ser importado e usado no App.jsx
export default Atendimento;
