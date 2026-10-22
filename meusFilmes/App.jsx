import Carrinho from "./src/components/Carrinho";

import { useState } from "react";
import Header from "./src/components/Header";
import Card from "./src/components/Card";
import ControleIngresso from "./src/components/ControleIngresso";
import Resumo from "./src/components/Resumo";

function App() {
    return (
        <Carrinho />
    );
}

// export default App;

function App() {
    const [adultos, setAdultos] = useState(0);
    const [infantis, setInfantis] = useState(0);


    function aumentarAdulto() {
        setAdultos(adultos + 1);
    }

    function diminuirAdulto() {
        if (adultos > 0) {
            setAdultos(adultos - 1);
        }
    }

    function aumentarInfantil() {
        setInfantis(infantis + 1);
    }

    function diminuirInfantil() {
        if (infantis > 0) {
            setInfantis(infantis - 1);
        }
    }

    const totalIngressos = adultos + infantis;

    const valorTotal = adultos * 30 + infantis * 15;

    function limparPedido() {
        setAdultos(0);
        setInfantis(0);
    }

    return (
        <>
        <Header 
        titulo="CineTicket"
        subtitulo="Reservaar seus ingressos"
        />

        <main className="container">
            <card titulo="Ingressos">
                <ControleIngresso 
                    tipo="Adulto"
                    preco={30}
                    quantidade={adultos}
                    aumentar={aumentarAdulto}
                    diminuir={diminuirAdulto}
                    />
                <ControleIngresso 
                    tipo="Infantil"
                    preco={15}
                    quantidade={infantis}
                    aumentar={aumentarInfantil}
                    diminuir={diminuirInfantil}
                    />
            </card>

            <Card titulo="Resumo da compra">
                <Resumo 
                adultos={adultos}
                infantis={infantis}
                totalIngressos={totalIngressos}
                valorTotal={valorTotal}
                limparPedido={limparPedido}
                />
            </Card>
        </main>
        </>
    );
}

export default App;