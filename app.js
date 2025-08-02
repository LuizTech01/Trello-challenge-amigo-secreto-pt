//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    const inputElement = document.getElementById('amigo');
    const valor = inputElement.value;

    if (valor === "") {
        alert("Por favor, insira um nome.");
        inputElement.focus();
        return false;
    }
    amigos.push(valor);
    inputElement.value = "";
    inputElement.focus();

    adicionarAmigoALista()
}

function adicionarAmigoALista(adicionarAmigo) {
    const listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const item = `<li>${amigo}</li>`;
        listaDeAmigos.innerHTML += item;
    })
    }
    
function sortearAmigo(){
    let aleatorio = Math.floor(Math.random() * amigos.length);
    let sorteANome = amigos[aleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Parabéns "${sorteANome}", você foi sorteado(a)!</li>`;
}

