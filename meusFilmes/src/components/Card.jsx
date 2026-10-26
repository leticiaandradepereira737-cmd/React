function Card({ titulo, children }) {
  return (
    <section className="card">
        <h2>{tirulo}</h2>

        <div className="card-conteudo">{children}</div>
    </section>
  );
}

export default Card;