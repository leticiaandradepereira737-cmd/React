function Filtros({ filtro, setFiltro }) {
    return (
        <div className="filtros">
            <button 
            className={filtro === "todos" ? "ativo" : ""}
            onClick={() => setFiltro("todos")}
            >
                Todos
            </button>

            <button 
            className={filtro === "lidos" ? "ativo" : ""}
            onClick={() => setFiltro("lidos")}
            >
                Lidos
            </button>

            <button 
            className={filtro === "quero-ler" ? "ativo" : ""}
            onClick={() => setFiltro("quero-ler")}
            >
                Quero ler
            </button>
        </div>
    );
}

export default Filtros;