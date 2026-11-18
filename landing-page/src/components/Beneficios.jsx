import Card from "./Card"


function Beneficios() {
    return (
        <section className="beneficios" id="beneficios">
                <h2>Por que estudar conosco?</h2>
            <div className="cards">
                <Card titulo='Aulas práticas'>
                    <p>Aprender construindo pequenos projetos</p>
                </Card>

                <Card titulo='Para iniciantes'>
                    <p>Comece mesmo sem experiência com programação.</p>
                </Card>

                <Card titulo='No seu ritmo'>
                    <p>Pratique o conteúdo apresentado durante a aula.</p>
                </Card>

            </div>
        </section>
    )
}

export default Beneficios