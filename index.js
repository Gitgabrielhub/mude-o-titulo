/*
function calculo(){
    return (this.pontos*3)/2
}



function criarCadastro(nomeCliente,numeroPontuacao){
    return {
        nome:nomeCliente,
        pontos:numeroPontuacao,
        dataNascimento:21092001,
        calculoPontos:calculo
    },
    {
        nome:nomeCliente,
        pontos:numeroPontuacao,
        dataNascimento:21092001,
        calculoPontos:calculo
        }
    }
} 



var cliente = criarCadastro("gabriel",5.5)
console.log(cliente)
console.log(cliente.calculoPontos())
*/

function h1change(i){
    let input = document.getElementById("texto");
    let h1 = document.getElementsByTagName("h1")[0]
    h1.innerText = i.value
}

function hideh1(){
    let h1 = document.getElementsByTagName("h1")[0]
    h1.style.display="none";
}