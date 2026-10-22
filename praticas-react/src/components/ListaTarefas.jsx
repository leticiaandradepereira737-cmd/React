import Tarefa from "./Tarefa.jsx";

function ListaTarefas({ tarefas, alternasStatus, removerTarefa }) {
    if (tarefas.length === 0) {
        return <p className="lista-vazia">Nenhuma tarefa cadastrada.</p>;
    }

    return (
        <section className="lista">
            {tarefas.map((tarefa) => {
                return (
                    <Tarefa
                        key={tarefa.id}
                        tarefa={tarefa}
                        alternasStatus={alternasStatus}
                        removerTarefa={removerTarefa}
                    />
                );
            })}
        </section>
    );
}

export default ListaTarefas;