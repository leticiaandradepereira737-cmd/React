// Recebe as informações básicas de cada item e o 'children', que permite injetar qualquer conteúdo extra dentro dele
function Card({
  titulo,
  descricao,
  valor,
  children
}) {
  return (
    // Estrutura principal do card que recebe as classes de estilização do CSS
    <div className="card">
      <div className="card-icone">
        {titulo.charAt(0)}
      </div>

      {/* Nome do serviço ou do item que o card representa */}
      <h3>{titulo}</h3>

      {/* Descrição detalhada do que está escrito nesse serviço */}
      <p>{descricao}</p>

      <strong className="card-valor">
        R$ {valor}
      </strong>

      {children}
    </div>
  );
}

// Exporta o Card pra ser usado em outros componetens, como o Servicos.jsx
export default Card;
