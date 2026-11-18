import Card from "./Card";

function Depoimentos() {
  return (
    <section className="depoimentos">
      <h2 className="d-titulo">Depoimentos dos alunos</h2>

      <div className="cards">
        <Card titulo="Ana">
          <p>Gostei muito das aulas práticas.</p>
          <strong>★★★★★</strong>
        </Card>

        <Card titulo="Lucas">
          <p>Finalmente comecei a entender React.</p>
          <strong>★★★★★</strong>
        </Card>

        <Card titulo="Marina">
          <p>Os projetos me ajudaram bastante.</p>
          <strong>★★★★☆</strong>
        </Card>
      </div>
    </section>
  );
}

export default Depoimentos;