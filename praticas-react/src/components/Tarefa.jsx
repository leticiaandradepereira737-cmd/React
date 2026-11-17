function Tarefa({ tarefa, alterarStatus, removerTarefa }) {
    return (
        <article className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>
            <div>
                <h3>{tarefa.texto}</h3>

                <p>
                    Status:
                    <strong>{tarefa.concluida ? "Concluída" : "Pendente"}</strong>
                </p>
            </div>

            <div className="acoes">
                <button
                    type="button"
                    onClick={() => {
                        alterarStatus(tarefa.id);
                    }}
                >
                    {tarefa.concluida ? "Reabrir" : "Concluir"}
                </button>

                <button
                    type="button"
                    className="remover"
                    onClick={() => {
                        removerTarefa(tarefa.id);
                    }}
                >
                    Remover
                </button>
            </div>
        </article>
    );
}

export default Tarefa;