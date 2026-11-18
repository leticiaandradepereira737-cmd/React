function FormularioTarefa({ texto, setTexto, adicionarTarefa }) {
    return (
        <form className="formulario" onSubmit={adicionarTarefa}>
            <label htmlFor="tarefa">Nova tarefa</label>

            <div className="linha-formulario">
                <input id="tarefa"
                type="text" 
                placeholder="Digite uma tarefa"
                value={texto}
                onChange={(event) => {
                    setTexto(event.target.value);
                }}
                />

                <button type="submit">Adicionar</button>
            </div>
        </form>
    )
}

export default FormularioTarefa;