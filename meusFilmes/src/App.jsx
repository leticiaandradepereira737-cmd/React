// // import { useState } from "react"
// // import Resultado from "./components/Resultado";
// // import BuscaCep from "./components/BuscaCep";

// import Contador from "./components/Contador";

// function App() {

//   // const [cep, setCep] = useState("")
//   // const [endereco, setEndereco] = useState("")
//   // const [erro, setErro] = useState("")

//   // async function buscarCep() {
//   //                               // Regex CPF
//   //   const cepLimpo = cep.replace(/\D/g, "");

//   //   if (cepLimpo.length !== 8){
//   //     setErro("Digite um CEP com oito números");
//   //     return;
//   //   }

//   //   try {
//   //     // GET(PEGAR), POST(POSTAR), UPDATE(ATUALIZAR), DELETE(DELETAR)

//   //     const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
//   //                             // res.json = formato de objeto {}
//   //     const dados = await res.json();
//   //     console.log(dados)
//   //     if(dados.erro){
//   //       setErro("CEP não encontrado");
//   //       return;
//   //     }

//   //     setEndereco(dados);
//   //   } catch (error) {
//   //     setErro("Não foi possível consultar o CEP");
//   //   }
//   // }

//   return (
//     <Contador />
//     // <div>
//     //   {/* <h1>Buscar endereço</h1>
//     //   <BuscaCep cep={cep} setCep={setCep} buscarCep={buscarCep} />
//     //   <Resultado endereco={endereco} />
//     //   {erro && <p>{erro}</p>} */}
//     // </div>
//   );
// }

// export default App;