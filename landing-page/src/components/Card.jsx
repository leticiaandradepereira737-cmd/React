
function Card({ titulo, children }) {
  return (
    <div className="card">
      <h3 >{titulo}</h3>

      <div className="card-conteudo">
        {children}
      </div>
    </div>
  )
}

export default Card