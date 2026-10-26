function Filtros({ filtro, setFiltro }) {
    return (
        <div className="filtros">
            <button
                className={filtro === "todos" ? "ativo" : ""}
                onClick={setFiltro("todos")}
            >
                Todos
            </button>

            <button
                className={filtro === "assistido" ? "ativo" : ""}
                onClick={setFiltro("assistidos")}
            >
                Assistidos
            </button>

            <button
                className={filtro === "pendentes" ? "ativo" : ""}
                onClick={setFiltro("pendentes")}
            >
                Quero assistir
            </button>
        </div>
    )
}

export default Filtro