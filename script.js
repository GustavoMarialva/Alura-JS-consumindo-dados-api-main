async function buscaEndereco(cep) {
  var mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";
  try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
      throw Error("CEP não existente!");
    }
    var cidade = document.getElementById("cidade");
    var logradouro = document.getElementById("endereco");
    var bairro = document.getElementById("bairro");
    var estado = document.getElementById("estado");

    cidade.value = consultaCepConvertida.localidade;
    logradouro.value = consultaCepConvertida.logradouro;
    bairro.value = consultaCepConvertida.bairro;
    estado.value = consultaCepConvertida.uf;

    console.log(consultaCepConvertida);
    return consultaCepConvertida;
  } catch (erro) {
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
    console.log(erro);
  }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

// focusout - quando a possa clica fora do campo. Ex campo do CEP, qd a pessoa clica fora do campo ele ativa a função

// .then((resposta) => resposta.json())
// .then((r) => {
//   if (r.erro) {
//     throw Error("Esse cep não existe!");
//   } else console.log(r);
// })
// .catch((erro) => console.log(erro))
// .finally((mensagem) => console.log("Processamento concluído!"));

// let ceps = ["24240460", "22220080"];
// let conjuntoCeps = ceps.map((valores) => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));
