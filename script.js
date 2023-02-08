async function buscaEndereco(cep) {
  try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
      throw Error("CEP não existente!");
    }
    console.log(consultaCepConvertida);
    return consultaCepConvertida;
  } catch (erro) {
    console.log(erro);
  }
}

// .then((resposta) => resposta.json())
// .then((r) => {
//   if (r.erro) {
//     throw Error("Esse cep não existe!");
//   } else console.log(r);
// })
// .catch((erro) => console.log(erro))
// .finally((mensagem) => console.log("Processamento concluído!"));

let ceps = ["24240460", "22220080"];
let conjuntoCeps = ceps.map((valores) => buscaEndereco(valores));
Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));
